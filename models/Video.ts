import mongoose, {Schema, model, models} from "mongoose";

export const VIDEO_DIMENTIONS={
    width: 1080,
    height:1920
} as const;

export interface IVideo {
    title: string;
    description: string;
    videoUrl: string;
    _id?: mongoose.Types.ObjectId;
    thumbnailUrl: string;
    controls?: boolean;
    transformation?:{
        width?: number;
        height?: number;
        quality?: number;
    };
}

const videoSchema = new Schema<IVideo>(
    {
        title : {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        thumbnailUrl: {
            type: String,
            required: true,
        },
        videoUrl: {
            type: String,
            required: true,
        },
        controls: {
            type: Boolean,
            default: true,
        },
        transformation:{
            type: {
                width: { type: Number, default: VIDEO_DIMENTIONS.width },
                height: { type: Number, default: VIDEO_DIMENTIONS.height },
                quality: { type: Number, min:1 , max:100 }, // Default quality
            },
        },
    },
    {
        timestamps: true,
    }
)

const Video = models?.Video || model<IVideo>("Video", videoSchema)

export default Video;