
import React, { useState } from 'react';
import '../Dashboard.css';
import FileUpload from '../components/FileUpload';
import MaterialCard from '../components/MaterialCard';

import {
  getTeacherMaterials,
  uploadMaterial,
  updateMaterialVisibility,
  deleteMaterial
} from '../services/materialService';

export default function TeacherDashboard() {
  const [materials, setMaterials] = useState(
    () => getTeacherMaterials().items
  );

  const [search, setSearch] = useState('');
  const [fileTypeFilter, setFileTypeFilter] = useState('all');

  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadError, setUploadError] = useState('');

  const handleUpload = async (file) => {
    if (isUploading) return;

    setIsUploading(true);
    setUploadMessage('');
    setUploadError('');

    try {
      const response = await Promise.resolve(
        uploadMaterial(file, 'teacher')
      );

      setMaterials((previous) => [
        response.item,
        ...previous
      ]);

      setUploadMessage(
        'Upload complete! Your material was added successfully.'
      );
    } catch (error) {
      setUploadError(
        error.message || 'Upload failed. Please try again.'
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleShare = (material) => {
    const newVisibility =
      material.visibility === 'shared' ? 'private' : 'shared';

    updateMaterialVisibility(material.id, newVisibility);
    setMaterials(getTeacherMaterials().items);
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this material?')) {
      return;
    }

    deleteMaterial(id);
    setMaterials(getTeacherMaterials().items);
  };

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch = `${material.title} ${material.fileName}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      fileTypeFilter === 'all' ||
      material.fileType === fileTypeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <div className="dashboard">
      <h1>Teacher Dashboard</h1>
      <p>Welcome! Manage and share your study materials.</p>

      <section>
        <h2>Upload Study Material</h2>

        <FileUpload
          onUpload={handleUpload}
          defaultTitle="Upload Study Material"
          defaultVisibility="private"
          isUploading={isUploading}
        />

        {uploadMessage && (
          <p role="status" aria-live="polite">
            {uploadMessage}
          </p>
        )}

        {uploadError && (
          <p role="alert">
            {uploadError}
          </p>
        )}
      </section>

      <section>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Materials</h3>
            <p>{materials.length}</p>
          </div>

          <div className="stat-card">
            <h3>Shared Materials</h3>
            <p>
              {materials.filter((m) => m.visibility === 'shared').length}
            </p>
          </div>

          <div className="stat-card">
            <h3>Private Materials</h3>
            <p>
              {materials.filter((m) => m.visibility === 'private').length}
            </p>
          </div>

          <div className="stat-card">
            <h3>Processing</h3>
            <p>
              {materials.filter((m) => m.status === 'processing').length}
            </p>
          </div>
        </div>

        <h2>My Study Materials</h2>
        <p>Total materials: {materials.length}</p>

        <label htmlFor="material-search">
          Search your materials
        </label>

        <input
          id="material-search"
          type="text"
          placeholder="Search by title or filename..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <label htmlFor="teacher-file-type">
          Filter by file type
        </label>

        <select
          id="teacher-file-type"
          value={fileTypeFilter}
          onChange={(e) => setFileTypeFilter(e.target.value)}
        >
          <option value="all">All Files</option>
          <option value="pdf">PDF</option>
          <option value="text">Text</option>
          <option value="image">Images</option>
          <option value="audio">Audio</option>
        </select>

        <div className="materials-list">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map((material) => (
              <div key={material.id}>
                <MaterialCard material={material} />

                <p>Visibility: {material.visibility}</p>
                <p>Status: {material.status}</p>

                <button
                  type="button"
                  onClick={() => handleShare(material)}
                >
                  {material.visibility === 'shared'
                    ? 'Unshare'
                    : 'Share with Students'}
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(material.id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p role="status">No materials found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
