# PowerShell script to download Poppins font files

$fontFiles = @(
    @{Name="Poppins-Regular.woff2"; Url="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2"},
    @{Name="Poppins-Medium.woff2"; Url="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2"},
    @{Name="Poppins-Bold.woff2"; Url="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2"},
    @{Name="Poppins-ExtraBold.woff2"; Url="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4Z1xlFd2JQEk.woff2"},
    @{Name="Poppins-Black.woff2"; Url="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5Z1xlFd2JQEk.woff2"}
)

$outputDir = "$PSScriptRoot\public\fonts"

# Create directory if it doesn't exist
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

# Download each font file
foreach ($font in $fontFiles) {
    $outputPath = Join-Path $outputDir $font.Name
    Write-Host "Downloading $($font.Name) to $outputPath"
    
    try {
        Invoke-WebRequest -Uri $font.Url -OutFile $outputPath
        Write-Host "Downloaded $($font.Name) successfully" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($font.Name): $_" -ForegroundColor Red
    }
}

Write-Host "Font download complete!" -ForegroundColor Green