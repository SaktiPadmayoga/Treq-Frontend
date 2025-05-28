import React, { useRef, useState } from 'react';
import { LucideUser, LucideUpload, LucideTrash } from 'lucide-react';

const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef(null);
    const [previewURL, setPreviewURL] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewURL(preview);
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        setPreviewURL(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div className="relative w-16 h-16 text-center mx-auto">
            <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                ref={inputRef}
                className="hidden"
            />
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {previewURL || image ? (
                    <img
                        src={previewURL || URL.createObjectURL(image)}
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <LucideUser className="w-8 h-8 text-gray-400" />
                )}
            </div>
            <button
                type="button"
                onClick={onChooseFile}
                className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow hover:bg-gray-100"
            >
                <LucideUpload className="w-3 h-3 text-gray-600" />
            </button>
            {image && (
                <button
                    type="button"
                    onClick={handleImageRemove}
                    className="absolute top-0 right-0 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                >
                    <LucideTrash className="w-3 h-3 text-red-500" />
                </button>
            )}
        </div>
    );
};

export default ProfilePhotoSelector;