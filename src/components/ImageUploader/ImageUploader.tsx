import { useState, ChangeEvent } from 'react';
import { IconButton, Typography } from '@mui/material';
import picture from '../../assets/icons/picture.svg';

function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imagePreviewsArray: string[] = [];

      const loadImages = () => {
        if (files.length === imagePreviewsArray.length) {
          setImagePreviews(imagePreviewsArray);
        }
      };

      files.forEach((file: File) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          if (event.target) {
            imagePreviewsArray.push(event.target.result as string);
            loadImages();
          }
        };

        reader.readAsDataURL(file);
      });

      setSelectedImages(files);
    }
  };

  return (
    <>
      <IconButton
        component="label"
        aria-label="images"
        sx={{
          alignItems: 'center',
          gap: '1rem',
          '&:hover': {
            borderRadius: '5rem',
          },
        }}
      >
        <img alt="add pictures" src={picture} />
        <Typography
          fontFamily="Manrope"
          fontSize="1.3rem"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="2.6rem"
          color="#A5A5A5"
        >
          <input
            style={{ fontSize: '1.8rem' }}
            type="file"
            name="thumbnails"
            multiple
            hidden
            onChange={handleImageChange}
          />
          Ajouter une image
        </Typography>
      </IconButton>
      <div className="image-previews">
        {imagePreviews.map((preview, index) => (
          <img
            key={index} // eslint-disable-line react/no-array-index-key
            src={preview}
            alt={`Preview ${index}`}
            className="preview-image"
          />
        ))}
      </div>
    </>
  );
}

export default ImageUploader;
