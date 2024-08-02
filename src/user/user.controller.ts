import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './Dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  @Post()
  async create(@Body() body: UserDto): Promise<UserDto> {
    return this.userservice.create(body);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.userservice.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    return this.userservice.findOne(parseInt(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UserDto,
  ): Promise<UserDto> {
    return this.userservice.update(parseInt(id), body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDto> {
    return this.userservice.delete(parseInt(id));
  }
}
