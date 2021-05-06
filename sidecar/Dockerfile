FROM ubuntu:16.04
RUN apt-get update && apt-get install -y git
COPY ./contents-cloner.sh /contents-cloner.sh
RUN chmod +x /contents-cloner.sh
WORKDIR /
CMD ["/contents-cloner.sh"]