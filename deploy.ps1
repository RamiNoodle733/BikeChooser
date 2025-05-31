# BikeChooser Deployment Helper Script
# Run this before deploying to production

Write-Host "🚴‍♂️ BikeChooser Deployment Check" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# Check if required files exist
$requiredFiles = @(
    "index.html",
    "styles.css", 
    "script-new.js",
    "sitemap.xml",
    "robots.txt"
)

Write-Host "`n📁 Checking required files..." -ForegroundColor Yellow
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file exists" -ForegroundColor Green
    } else {
        Write-Host "❌ $file missing" -ForegroundColor Red
    }
}

# Check for placeholder content that needs to be replaced
Write-Host "`n🔍 Checking for placeholders to replace..." -ForegroundColor Yellow

# Check script-new.js for affiliate placeholders
$scriptContent = Get-Content "script-new.js" -Raw
if ($scriptContent -match "YOUR_AFFILIATE_LINK") {
    Write-Host "⚠️  Replace YOUR_AFFILIATE_LINK placeholders in script-new.js" -ForegroundColor Red
} else {
    Write-Host "✅ Affiliate links updated" -ForegroundColor Green
}

if ($scriptContent -match "YOUR_ASSOCIATE_ID") {
    Write-Host "⚠️  Replace YOUR_ASSOCIATE_ID in script-new.js" -ForegroundColor Red
} else {
    Write-Host "✅ Associate ID updated" -ForegroundColor Green
}

# Check index.html for Google Analytics
$indexContent = Get-Content "index.html" -Raw
if ($indexContent -match "GA_MEASUREMENT_ID") {
    Write-Host "⚠️  Replace GA_MEASUREMENT_ID in index.html" -ForegroundColor Red
} else {
    Write-Host "✅ Google Analytics ID updated" -ForegroundColor Green
}

# Display next steps
Write-Host "`n🚀 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Replace all placeholder IDs and links above" -ForegroundColor White
Write-Host "2. Test the site locally: npm run dev" -ForegroundColor White
Write-Host "3. Deploy to Netlify by connecting your GitHub repo" -ForegroundColor White
Write-Host "4. Follow LAUNCH_CHECKLIST.md for marketing" -ForegroundColor White

Write-Host "`n📊 Quick Stats:" -ForegroundColor Cyan
$totalLines = (Get-Content "index.html" | Measure-Object -Line).Lines + 
              (Get-Content "styles.css" | Measure-Object -Line).Lines + 
              (Get-Content "script-new.js" | Measure-Object -Line).Lines

Write-Host "Total code lines: $totalLines" -ForegroundColor White
Write-Host "Files ready for deployment: $($requiredFiles.Count)" -ForegroundColor White

Write-Host "`n🎯 Target URL: https://bikechooser.netlify.app" -ForegroundColor Green
Write-Host "Good luck with your launch! 🚴‍♂️💰" -ForegroundColor Green

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file exists" -ForegroundColor Green
    } else {
        Write-Host "❌ Missing required file: $file" -ForegroundColor Red
        exit 1
    }
}

Write-Host "`n📝 Adding all changes to git..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    git commit -m "Launch ready: Updated URLs to bikechooser.netlify.app and final optimizations"
    
    Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    
    Write-Host "`n✅ Successfully deployed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Your site will be available at: https://bikechooser.netlify.app" -ForegroundColor Cyan
    Write-Host "`n📋 Next steps:" -ForegroundColor Yellow
    Write-Host "1. Connect your GitHub repo to Netlify" -ForegroundColor White
    Write-Host "2. Set custom domain: bikechooser.netlify.app" -ForegroundColor White
    Write-Host "3. Replace GA_MEASUREMENT_ID with your Google Analytics ID" -ForegroundColor White
    Write-Host "4. Update affiliate links with your Amazon Associate ID" -ForegroundColor White
    Write-Host "5. Submit sitemap to Google Search Console" -ForegroundColor White
} else {
    Write-Host "✅ No changes to commit - already up to date!" -ForegroundColor Green
}

Write-Host "`n🎉 Ready for launch! Check your LAUNCH_CHECKLIST.md for next steps." -ForegroundColor Cyan
