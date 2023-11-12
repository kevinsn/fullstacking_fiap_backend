import { AppDataSource } from "../data-source";
import { Tasks } from '../entity/Tasks';
import { Request, Response } from "express";
const repository = AppDataSource.getRepository(Tasks);

export const getTasks = async (request: Request, response: Response) => {
    const tasks = await repository.find();

    return response.json(tasks);
};

export const saveTask = async (request: Request, response: Response) => {
    const task = await repository.save(request.body);

    return response.json(task);
};

export const getTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await repository.findOneBy({ id: parseInt(id) });
    return response.json(task);
};

export const updateTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await repository.update(id, request.body);

    if (task.affected == 1) {
        const taskUpdated = await repository.findOneBy({ id: parseInt(id) });
        return response.json(taskUpdated);
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' })
    }
};

export const deleteTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await repository.delete(id);


    if (task.affected == 1) {
        return response.status(200).json({ message: "Tarefa excluída com sucesso!" });
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' })
    }
};

export const finishedTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await repository.update(id, {
        finished: true,
    });

    if (task.affected == 1) {
        const taskFinished = await repository.findOneBy({ id: parseInt(id) });
        return response.json(taskFinished);
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' })
    }
};