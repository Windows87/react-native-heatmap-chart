
Pod::Spec.new do |s|
  s.name         = "RNReactNativeHeatmap"
  s.version      = "1.0.0"
  s.summary      = "RNReactNativeHeatmap"
  s.description  = <<-DESC
                  RNReactNativeHeatmap
                   DESC
  s.homepage     = "https://github.com/Windows87/react-native-heatmap-chart/"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNReactNativeHeatmap.git", :tag => "master" }
  s.source_files  = "RNReactNativeHeatmap/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  