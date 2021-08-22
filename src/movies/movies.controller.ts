import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movi.dto';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from './movies.service';
 

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService:MoviesService){}
    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") id:number){
        return this.moviesService.getOne(id);
    }

    @Post("")
    getCreate(@Body() movieData: CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Patch("/:id")
    Patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto): Movie[]{
        return  this.moviesService.update(movieId, updateData);
    }

    @Delete("/:id")
    remove(@Param("id") id:number){
        return this.moviesService.deleteOne(id);
    }

}
