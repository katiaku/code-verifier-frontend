import { useState } from "react";
import { Dropzone, FileItem, FileValidated, FullScreenPreview, VideoPreview } from "@dropzone-ui/react";

export const FileUploader = () => {
    
    const [files, setFiles] = useState<FileValidated[]>([]);
    const [imageSrc, setImageSrc] = useState<any>(undefined);
    const [videoSrc, setVideoSrc] = useState<any>(undefined);

    const updateFiles = (incomingFiles: FileValidated[]) => {
        setFiles(incomingFiles);
    }

    const handleSee = (imageSource: any) => {
        setImageSrc(imageSource);
    }

    const handleClean =(files: FileValidated[]) => {
        // console.log("list cleaned", files);
    }

    const handleWatch = (vidSrc: any) => {
        setVideoSrc(vidSrc);
    };

    const handleUpload= (response: any) => {
        // check the responses here
        console.log("responses", response);
    }

    const removeFile = (id: string | number | undefined) => {
        if(id){
            setFiles(files.filter((x) => x.id !== id));
        }
    };

    return (
        <Dropzone
            style={{ minWidth: "505px"}}
            label="Drag'n drop files here or click to browse" 
            onClean={handleClean}
            onChange={updateFiles} 
            value={files} 
            maxFiles={5}
            // maxFileSize={2998000}
            url="http://localhost:8000/api/katas/uploadFile"
            // fakeUploading
            onUploadFinish={handleUpload}
        >
            {files.map((file: FileValidated) => (
                <FileItem 
                    {...file} 
                    key={file.id} 
                    onDelete={() => removeFile(file.id)}
                    onSee={handleSee}
                    onWatch={handleWatch}
                    preview 
                    info 
                    resultOnTooltip
                    hd
                    localization={"ES-es"}
                />
            ))}
            <FullScreenPreview
                imgSource={imageSrc}
                openImage={imageSrc}
                onClose={(e: any) => handleSee(undefined)}
            />
            <VideoPreview
                videoSrc={videoSrc}
                openVideo={videoSrc}
                onClose={(e: any) => handleWatch(undefined)}
                controls
                autoplay
            />
        </Dropzone>
    );
}
