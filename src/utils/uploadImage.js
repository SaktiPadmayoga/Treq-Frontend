import apiPath from "./apiPath";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) =>   {
    const formData = new FormData();
        formData.append("image", imageFile);
    try {
        const response = await axiosInstance.post(apiPath.auth.uploadImage, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        });

        return response.data; // Assuming the backend returns { imageUrl: '...' }
    } catch (error) {
        console.error("Image upload failed:", error);
        throw error;
    }
}

export default uploadImage;