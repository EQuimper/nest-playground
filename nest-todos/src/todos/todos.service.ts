import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ForbiddenException } from '../exceptions';

@Component()
export class TodosService {
  constructor(
    @Inject('TodoModelToken') private readonly todoModel: Model<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);

    return await createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find();
  }

  async findById(id: string): Promise<Todo> {
    return await this.todoModel.findById(id).catch(() => {
      throw new ForbiddenException();
    });
  }
}
