
<template>
  <div>
    <!-- <h1 class="text-md-center">Education</h1> -->
    <v-system-bar
      color="#0D1291"
      dark
    >   
      <v-icon>mdi-account</v-icon><h3>메인페이지</h3>
    </v-system-bar>
    <v-main>
      <v-container>
        <v-card class="mx-auto" max-width="100%" tile>
      <v-img height="200" src="img/street.jpg"></v-img>
      <v-row style="margin:2.5%;position:absolute; top: 40px">

                  <v-list-item>
                   <v-list-item-avatar size="100">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Kim"
                      >
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="title" style="margin-top:20px;" >KimHyunHo</v-list-item-title>
                      <v-list-item-title class="title2">Silla Universty / potofolio web</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
    </v-row>
  </v-card>
          <v-spacer></v-spacer>
          <br>
          <br>
          <br>
            <v-card
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          SUBJECT 1
        </div>
        <v-list-item-title class="text-h5 mb-1">
        MY INFORMATION 
        </v-list-item-title>
        <v-list-item-subtitle>I'd like to introduce myself</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="150"
       
      > <img src="img/pro.png" alt="자기소개">. </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        class="ma-2"
        color="primary"
        to="/education"
      >
        More Information
        <v-icon
          end
       
        >mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          SUBJECT 2
        </div>
        <v-list-item-title class="text-h5 mb-1">
          PROJECTS
        </v-list-item-title>
        <v-list-item-subtitle>Assignments done during the semester</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="150"
       
      > <img src="img/idea.png" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        class="ma-2"
        color="primary"
        to="/myproject"
      >
        More Information
        <v-icon
          end
       
        >mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          SUBJECT 3
        </div>
        <v-list-item-title class="text-h5 mb-1">
          TEAM
        </v-list-item-title>
        <v-list-item-subtitle>team members who helped
</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="150"
        
      ><img src="img/team.png" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        class="ma-2"
        color="primary"
        to="/team"
      >
        More Information
        <v-icon
          end
       
        >mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
          
 
        
        <br>
       

      </v-container>
    </v-main>
  </div>
</template>
<script>

export default {
    data(){
      return {
        projects:[
          {title:"Lab Scale"  ,language:"C , aduino랑 재료들을 활용하여 드론제작및 제어",avatar:"img/dron.jpg",lan:"C언어"},
          {title:"임베디드 프로그래밍",language:"C랑 온도센서를 이용한 스마트선풍기 제작",avatar:"img/fan.jpg",lan:"C언어"}
          ,{title:"Java 프로그래밍", language:"Java 언어를 사용하여 음식점 포스기를 제작",avatar:"img/pos.jpg",lan:"Java"}
          ,{title:"MICT 융합과목",language:"3D프린터를 사용하여 재료를 제작 C를 이용하여 6족 보행 로봇 제어",avatar:"img/robot.jpg",lan:"C언어"}
          ,{title:"Vue 포토폴리오",language:"웹 프레임 워크 Vue를 활용하여 웹페이지를 만든후 포토폴리오 내용 넣기 ",avatar:"img/poto.png",lan:"Vuetify"}

        ]
      }
    },
   
  
  }
</script>
<style scoped>
.title{
  color: beige;
}
.title2{
  color: antiquewhite;
}
</style>