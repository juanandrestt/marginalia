# app/helpers/meta_tags_helper.rb
module MetaTagsHelper
  def meta_title
    content_for?(:meta_title) ? content_for(:meta_title) : DEFAULT_META["meta_title"]
  end

  def meta_description
    content_for?(:meta_description) ? content_for(:meta_description) : DEFAULT_META["meta_description"]
  end

  def meta_image
    image = content_for?(:meta_image) ? content_for(:meta_image) : DEFAULT_META["meta_image"]
    image.starts_with?("http") ? image : image_url(image)
  end
end
