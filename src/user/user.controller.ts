import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UserController{
    @Get()
    find(): string[] {
       return ["ahmed" , "mohamed" , "Ali"];
    }

    @Get(":username")
    findOne(@Param("username") username : string) : string {
       return username;
    }

    @Post()
    Create(@Body() createuserDto : CreateUserDto) {
        
        return createuserDto ;
    }

    @Patch(":username")
    Update(@Param("username") username : string , @Body() updateUserDto:UpdateUserDto){
        
        return updateUserDto;
    }

    @Delete(":username")
    @HttpCode(HttpStatus.NO_CONTENT)
    Remove(@Param("username") username : string) {
        
    }
}