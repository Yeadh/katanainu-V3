import '@google/model-viewer';

const ModelViwer = ({ src }) => {
    return(
        <>
            <model-viewer src={src} alt="A 3D model of a car" shadow-intensity="1" camera-controls auto-rotate ar ></model-viewer>
        </>
    )
}

export default ModelViwer