import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

export function DropSectionMenagePhotos() {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    console.log(acceptedFiles);

    const formData = new FormData();
    acceptedFiles.forEach(file => formData.append('files', file));

    try {
      const res = await fetch(`http://localhost:3000/api/properties/123/images`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const uploaded = await res.json();
      console.log('Uploaded files:', uploaded);
    } catch (err) {
      console.error(err);
    }

    // show here a code to upload the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 10,
    onDrop,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #1976d2',
        borderRadius: 2,
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        background: isDragActive ? 'rgba(25,118,210,0.1)' : 'transparent',
      }}
    >
      <input {...getInputProps()} />
      <Typography>
        {isDragActive
          ? 'Drop images here…'
          : 'Drag & drop images here, or click to upload'}
      </Typography>
    </Box>
  );
}

export default DropSectionMenagePhotos;
