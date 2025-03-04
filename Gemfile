source 'https://rubygems.org'
gem "jekyll", "~> 4.2"
group :jekyll_plugins do
  gem "jekyll-include-cache", "~> 0.2"
  gem "jekyll-sitemap", "~> 1.4"
end

# siehe auch https://github.com/protocolbuffers/protobuf/issues/16853#issuecomment-2111685999
gem 'google-protobuf', force_ruby_platform: true if RUBY_PLATFORM.include?('linux-musl')
