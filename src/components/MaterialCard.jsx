
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Image,
  Music,
  Video,
  Download,
  Eye
} from 'lucide-react';

const fileIcons = {
  pdf: FileText,
  text: FileText,
  image: Image,
  audio: Music,
  video: Video
};

export default function MaterialCard({ material }) {
  const navigate = useNavigate();

  const Icon = fileIcons[material.fileType] || FileText;

  const handlePreview = () => {
    navigate(`/workspace/${material.id}`);
  };

  return (
    <article className="material-card">
      <div className="material-icon" aria-hidden="true">
        <Icon size={28} />
      </div>

      <div className="material-info">
        <h3>{material.title}</h3>

        <p>File: {material.fileName}</p>

        <p>
          Type: {material.fileType.toUpperCase()}
        </p>

        <p>
          Status: {material.status}
        </p>

        <p>
          Visibility: {material.visibility}
        </p>

        <p>
          Uploaded: {new Date(material.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className="material-actions">
        <button
          type="button"
          onClick={handlePreview}
          aria-label={`Open ${material.title}`}
        >
          <Eye size={18} aria-hidden="true" />
          Open Material
        </button>

        {material.fileUrl && (
          <a
            href={material.fileUrl}
            download={material.fileName}
            aria-label={`Download ${material.fileName}`}
          >
            <Download size={18} aria-hidden="true" />
            Download
          </a>
        )}
      </div>
    </article>
  );
}
