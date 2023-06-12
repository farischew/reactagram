import { cld } from "../lib/cloudinary";

const URL = "https://api.cloudinary.com/v1_1/dvk4dtlwv/image/upload";

// Get Photo from Cloudinary
export const getPostPhoto = (publicId) => {
  const testImage = cld.image(`development/${publicId}`);

  return testImage;
};

// Upload photo to Cloudinary
export const uploadPostPhoto = async (formData) => {
  const response = await fetch(URL, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log("Upload Success", data);

  return data;
};
