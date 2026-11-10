
import React, { useRef, useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';

const allowedTypes = [
  'pdf', 'txt', 'png', 'jpg', 'jpeg',
  'webp', 'mp3', 'wav'
];

const mimeTypes = {
  pdf: ['application/pdf'],
  txt: ['text/plain'],
  png: ['image/png'],
  jpg: ['image/jpeg'],
  jpeg: ['image/jpeg'],
  webp: ['image/webp'],
  mp3: ['audio/mpeg', 'audio/mp3'],
  wav: ['audio/wav', 'audio/x-wav']
};

export default function FileUpload({
  onUpload,
  onCancel,
  acceptedTypes,
  maxSizeBytes,
  defaultTitle = 'Upload Study Material',
  defaultVisibility = 'private',
  isUploading = false
}) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef(null);

  const allowedExtensions = acceptedTypes
    ? acceptedTypes.map((type) =>
        type.replace('.', '').toLowerCase()
      )
    : allowedTypes;

  const validateFile = (selectedFile) => {
    const extension = selectedFile.name
      .split('.')
      .pop()
      .toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      return 'Unsupported file type. Please select a supported file.';
    }

    const validMimeTypes = mimeTypes[extension] || [];

    if (
      !selectedFile.type ||
      !validMimeTypes.includes(selectedFile.type)
    ) {
      return 'The file MIME type is invalid or unsupported.';
    }

    if (
      maxSizeBytes &&
      selectedFile.size > maxSizeBytes
    ) {
      return 'The selected file exceeds the allowed file size.';
    }

    return '';
  };

  const selectFile = (selectedFile) => {
    if (!selectedFile) return;

    const validationError = validateFile(selectedFile);

    if (validationError) {
      setFile(null);
      setError(validationError);
      return;
    }

    setError('');
    setFile(selectedFile);
  };

  const handleChange = (e) => {
    selectFile(e.target.files[0]);
    e.target.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    selectFile(e.dataTransfer.files[0]);
  };

  const handleRemove = () => {
    setFile(null);
    setError('');
    onCancel?.();
  };

  const handleUpload = () => {
    if (!file || isUploading) return;
    onUpload?.(file);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="upload-container">
      <div
        className={`upload-box ${dragging ? 'dragging' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <Upload size={32} aria-hidden="true" />

        <h3>{defaultTitle}</h3>

        <p>Drag and drop your file here, or browse files.</p>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={isUploading}
        >
          Browse Files
        </button>

        <input
          ref={inputRef}
          id="material-file"
          type="file"
          accept={allowedExtensions.map((type) => `.${type}`).join(',')}
          onChange={handleChange}
          disabled={isUploading}
          aria-describedby="upload-help upload-error"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0
          }}
        />

        <p id="upload-help">
          Supported formats: {allowedExtensions.join(', ').toUpperCase()}
        </p>

        {maxSizeBytes && (
          <p>Maximum size: {formatSize(maxSizeBytes)}</p>
        )}
      </div>

      {error && (
        <p id="upload-error" role="alert">
          {error}
        </p>
      )}

      {file && (
        <div className="selected-file" role="status">
          <FileText size={20} aria-hidden="true" />

          <span>
            {file.name} ({formatSize(file.size)})
          </span>

          <button
            type="button"
            onClick={handleRemove}
            disabled={isUploading}
            aria-label="Remove selected file"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? 'Uploading...' : 'Upload File'}
          </button>
        </div>
      )}
    </div>
  );
}
