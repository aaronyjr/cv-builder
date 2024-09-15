export function CvTemplateContainer() {
    const aspectRatio = 1.414;
    const height = '90vh';
    const width = `calc(${height} / ${aspectRatio})`; // Calculate width using the aspect ratio
  
    return (
      <div style={{ height, width, backgroundColor: 'red', marginLeft: '100px' }}>
        <p>Hello</p>
      </div>
    );
  }
  