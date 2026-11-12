
import React, { useState } from 'react';
import '../Dashboard.css';
import FileUpload from '../components/FileUpload';
import MaterialCard from '../components/MaterialCard';

import {
  getSharedMaterials,
  getStudentMaterials,
  uploadMaterial
} from '../services/materialService';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('shared');
  const [search, setSearch] = useState('');
  const [fileTypeFilter, setFileTypeFilter] = useState('all');

  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadError, setUploadError] = useState('');

  const [sharedMaterials, setSharedMaterials] = useState(
    () => getSharedMaterials().items
  );

  const [myMaterials, setMyMaterials] = useState(
    () => getStudentMaterials().items
  );

  const handleUpload = async (file) => {
    if (isUploading) return;

    setIsUploading(true);
    setUploadMessage('');
    setUploadError('');

    try {
      const response = await Promise.resolve(
        uploadMaterial(file, 'student')
      );

      setMyMaterials((previous) => [
        response.item,
        ...previous
      ]);

      setActiveTab('mine');
      setUploadMessage('Upload complete! Your file was added successfully.');
    } catch (error) {
      setUploadError(
        error.message || 'Upload failed. Please try again.'
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleSharedTab = () => {
    const latestMaterials = getSharedMaterials().items;

    setActiveTab('shared');
    setSearch('');
    setSharedMaterials(latestMaterials);
  };

  const handleMyUploadsTab = () => {
    setActiveTab('mine');
    setSearch('');
    setMyMaterials(getStudentMaterials().items);
  };

  const displayedMaterials =
    activeTab === 'shared'
      ? sharedMaterials
      : myMaterials;

  const filteredMaterials = displayedMaterials.filter((material) => {
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
      <h1>Student Dashboard</h1>

      <p>
        Welcome! Access shared learning materials
        and manage your own uploads.
      </p>

      <section>
        <h2>Upload Your File</h2>

        <FileUpload
          onUpload={handleUpload}
          defaultTitle="Upload Your File"
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

        <p>Your uploaded files are private by default.</p>
      </section>

      <section>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Shared Materials</h3>
            <p>{sharedMaterials.length}</p>
          </div>

          <div className="stat-card">
            <h3>My Uploads</h3>
            <p>{myMaterials.length}</p>
          </div>

          <div className="stat-card">
            <h3>Private Uploads</h3>
            <p>
              {myMaterials.filter(
                (m) => m.visibility === 'private'
              ).length}
            </p>
          </div>
        </div>

        <h2>Learning Materials</h2>

        <div>
          <button
            type="button"
            onClick={handleSharedTab}
            aria-pressed={activeTab === 'shared'}
          >
            Shared With Me
          </button>

          <button
            type="button"
            onClick={handleMyUploadsTab}
            aria-pressed={activeTab === 'mine'}
          >
            My Uploads
          </button>
        </div>

        <p>
          Total materials: {displayedMaterials.length}
        </p>

        <label htmlFor="student-material-search">
          Search learning materials
        </label>

        <input
          id="student-material-search"
          type="text"
          placeholder="Search by title or filename..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <label htmlFor="file-type-filter">
          Filter by file type
        </label>

        <select
          id="file-type-filter"
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
              <MaterialCard
                key={material.id}
                material={material}
              />
            ))
          ) : (
            <p role="status">
              {activeTab === 'shared'
                ? 'No shared materials available.'
                : 'You have not uploaded any materials yet.'}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
