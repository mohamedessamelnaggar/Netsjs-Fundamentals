import { Controller, Get, Post , Patch, Delete, Req, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid"; 


@Controller('users')
export class UsersController{

    private  users:UserEntity[] = [];

    @Get()
    find() : UserEntity[] {
        return  this.users;
    }

    @Get(":id")
    findOne(@Param("id") id : string) : UserEntity {
        return this.users.find((user) => user.id === id);
      }
    

    @Post()    
    create(@Body() createUserDto:CreateUserDto) {
        const newUser : UserEntity = {
            ...createUserDto ,
            id : uuid() ,
        }
        this.users.push(newUser);
        return newUser;
    }

    @Patch(":id")
    update(@Param("id") id : string , @Body() updateUserDto : UpdateUserDto)  {
        // 1-  get the index of the user by id
        const index = this.users.findIndex((user) => user.id == id);

        //2- update the indexeduser came from point 1 
        this.users[index] = {...this.users[index] , ...updateUserDto};

        return this.users[index] ;
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id") id : string) {
        this.users = this.users.filter((user) => user.id != id);

    }

}
