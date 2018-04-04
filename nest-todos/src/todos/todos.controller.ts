import { Controller, Get, Post, Body, Param, HttpStatus, HttpException } from '@nestjs/common';

import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { ForbiddenException } from '../exceptions';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<Todo> {
    return this.todosService.findById(params.id);
  }
}
