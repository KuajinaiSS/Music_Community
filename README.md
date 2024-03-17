# Music_Community
## Clonar el repositorio
```bash
git clone https://github.com/KuajinaiSS/Music_Community.git
```

## Instalar Backend
accederemos al backend por consola
```bash
cd backend_Community/backend
```

copiaremos el .env.example en un .env para configurarlo
```bash
copy .env.example .env
```

Configuraremos el .env con las credenciales de Mysql, la seccion que modificaremos de debe de ver algo asi
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=CommunityDB
DB_USERNAME=root
DB_PASSWORD=<TU CONTRASEÑA>
```

configuraremos el proyecto
```bash
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

iniciaremos el backend
```bash
php artisan serve
```

## Frontend

#### Instalación del Frontend

accederemos al frontend por consola
```bash
cd ../../frontend_Community/frontend
```

instalaremos las dependencias
```bash
npm install
```

iniciaremos el frontend
```bash
npm run start
```
Abre tu navegador en `http://localhost:3000` para ver la aplicación en ejecución


