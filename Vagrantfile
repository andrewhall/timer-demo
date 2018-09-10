# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box_download_insecure = true
  #config.vm.box = "bento/centos-7.3"
  config.vm.box_url = "https://frc-web2d.navair.navy.mil/artifactory/dev-tools/ndms/vagrant/boxes/NDMS_Generic_Centos/NDMS_Generic_Centos_1.0"
  config.vm.box = "NDMS_Generic_Centos_1.0"
  #config.vm.box = "/Users/steven.dussinger/.vagrant.d/boxes/GenericCentos"

  config.ssh.username = "vagrant"
  config.ssh.password = "vagrant"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080
  #config.vm.network "forwarded_port", guest: 2181,  host: 2181  #ZooKeeper
  #config.vm.network "forwarded_port", guest: 5601,  host: 5601  #Kibana
  #config.vm.network "forwarded_port", guest: 8200,  host: 8200  #Zuul
  #config.vm.network "forwarded_port", guest: 8761,  host: 8761  #Eureka
  #config.vm.network "forwarded_port", guest: 9200,  host: 9200  #ElasticSearch
  #config.vm.network "forwarded_port", guest: 5044,  host: 5044  #LogStash
  #config.vm.network "forwarded_port", guest: 27017, host: 27017 #Mongo
  #config.vm.network "forwarded_port", guest: 9092,  host: 9092  #Kafka
  #config.vm.network "forwarded_port", guest: 4444,  host: 4444  #Selenium
  #config.vm.network "forwarded_port", guest: 1521,  host: 1521  #Oracle
  #config.vm.network "forwarded_port", guest: 5044,  host: 5044  #Oracle EM
  #config.vm.network "forwarded_port", guest: 5000,  host: 5000  #Docker Registry
  config.vm.network "forwarded_port", guest: 80,  host: 80  #Apache



  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  #config.vm.network "private_network", ip: "192.168.56.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"
  # config.vm.synced_folder "C:/git/docker-images", "/docker/images"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "4096"
    vb.cpus = "2"
    # Display the VirtualBox GUI when booting the machine
    #vb.gui = true
    vb.name = "Apache HTTPD"
  end

  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
	sudo groupadd docker
	sudo usermod -aG docker vagrant
	
	sudo mkdir -p /ndms/bin
	tar xzvf /vagrant/docker-17.12.1-ce.tgz
	sudo cp docker/* /usr/bin/
	sudo mkdir -p /ndms/docker
	sudo mkdir -p /etc/docker
	sudo cp /vagrant/daemon.json /etc/docker/
	sudo cp /vagrant/docker.service /usr/lib/systemd/system
	sudo systemctl start docker
	sudo systemctl enable docker
	
	echo "Added umecss74 cert to Docker trust"
	sudo mkdir -p /etc/docker/certs.d/frc-web2d.navair.navy.mil/
	sudo cp /vagrant/umecss74.cer /etc/docker/certs.d/frc-web2d.navair.navy.mil/ca.crt
	
	echo "Moving docker-compose"
	sudo cp /vagrant/docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
	
	docker run -dit --name not-apache-app -p 80:80 -v "/vagrant":/usr/local/apache2/htdocs/ frc-web2d.navair.navy.mil/apache/httpd:2.4 
	
  SHELL
end
