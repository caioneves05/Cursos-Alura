import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from 'src/dto/CriaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuarios(@Body() dataUser: CriaUsuarioDTO) {
        this.usuarioRepository.salvar(dataUser)
        return dataUser
    }

    @Get()
    async listarUsuarios() {
        return this.usuarioRepository.listar()
    }

}