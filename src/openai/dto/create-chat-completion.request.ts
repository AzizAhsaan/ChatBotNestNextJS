import  {IsString, IsNotEmpty, IsArray, Validate, ValidateNested } from "class-validator"
import {Type} from "class-transformer"
export class createChatCompletionRequest {
    @IsArray()
    @ValidateNested({each:true})
    @Type(() => ChatCompletionMessageDto)
    messages: ChatCompletionMessageDto[];

}
export class ChatCompletionMessageDto {
    @IsString()
    @IsNotEmpty()
    role: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}