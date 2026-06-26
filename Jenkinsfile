stage('Debug Docker') {
    steps {
        sh '''
        whoami
        id
        pwd
        ls -l /var/run/docker.sock
        docker version
        docker ps
        docker-compose version
        docker-compose ps
        '''
    }
}