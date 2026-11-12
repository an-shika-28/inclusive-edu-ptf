
import { mockMaterials } from '../data/mockMaterials';

// Temporary mock storage until backend integration
let materials = [...mockMaterials];

// Convert file extension into the agreed Material category
const getFileType = (fileName) => {
  const extension = fileName.split('.').pop().toLowerCase();

  if (extension === 'pdf') return 'pdf';

  if (['png', 'jpg', 'jpeg', 'webp'].includes(extension)) {
    return 'image';
  }

  if (['mp3', 'wav'].includes(extension)) {
    return 'audio';
  }

  if (['mp4', 'webm'].includes(extension)) {
    return 'video';
  }

  return 'text';
};

// Get teacher's materials
export const getTeacherMaterials = () => ({
  items: materials.filter(
    (item) => item.ownerRole === 'teacher'
  )
});

// Get materials shared with students
export const getSharedMaterials = () => ({
  items: materials.filter(
    (item) =>
      item.ownerRole === 'teacher' &&
      item.visibility === 'shared'
  )
});

// Get student's own uploads
export const getStudentMaterials = () => ({
  items: materials.filter(
    (item) => item.ownerRole === 'student'
  )
});

// Upload a new material
export const uploadMaterial = (file, ownerRole) => {
  if (!['teacher', 'student'].includes(ownerRole)) {
    throw new Error('Invalid owner role.');
  }

  const newMaterial = {
    id: Date.now().toString(),
    title: file.name,
    fileName: file.name,
    fileType: getFileType(file.name),
    mimeType: file.type,
    ownerId: ownerRole === 'teacher' ? 'teacher01' : 'student01',
    ownerRole,
    visibility: 'private',
    createdAt: new Date().toISOString(),
    status: 'ready',
    fileUrl: URL.createObjectURL(file)
  };

  materials = [newMaterial, ...materials];

  return { item: newMaterial };
};

// Share or unshare a material
export const updateMaterialVisibility = (id, visibility) => {
  if (!['shared', 'private'].includes(visibility)) {
    throw new Error('Invalid visibility value.');
  }

  materials = materials.map((item) =>
    item.id === id
      ? { ...item, visibility }
      : item
  );

  return {
    item: materials.find((item) => item.id === id) || null
  };
};

// Delete a material
export const deleteMaterial = (id) => {
  materials = materials.filter(
    (item) => item.id !== id
  );

  return { success: true };
};
