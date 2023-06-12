import { cld } from "../lib/cloudinary";

// Get Photo from Cloudinary
export const getPostPhoto = (publicId) => {
  const testImage = cld.image(`development/${publicId}`);

  return testImage;
};
