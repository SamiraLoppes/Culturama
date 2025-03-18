import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({ logger: true })
    );

    const config = new DocumentBuilder()
        .setTitle("Culturama API")
        .setDescription("Uma plataforma Web e Mobile que visa incentivar o turismo, cultura, locais, hoteis de uma região")
        .setVersion("1.0.0")
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, documentFactory);

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
