<template>
  <v-card
    class="mx-auto"
    max-width="88%"
  >
  <v-system-bar

color="#000000"
dark
> Project4 </v-system-bar>
    <v-img
      src="img/robot2.jpg"
      height="400px"
      cover
    ></v-img>

    <v-card-title>
    <h1> <strong> MICT 융합과목</strong></h1>
    </v-card-title>
    <br>

    <v-card-subtitle>
     자세한 정보를 알고싶으면 아래버튼 클릭
      
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="error
        "
        
        variant="text"
       
        @click="show=!show"
      >
       자세한정보
      </v-btn>

      <v-spacer></v-spacer>
      
      
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show">
        <v-divider></v-divider>
  
        
   <v-card
  
    max-width="100%"
    height="100%"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        0.팀원 및 역할
        <v-card
    class=""
    max-width="50%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Group Member
        </div>
        <v-list-item-title class="text-h5 mb-1">
        현호
        </v-list-item-title>
        <v-list-item-subtitle>조립 알고리즘작성</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      
      ><img src="img/face1.png" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/team"
      >
        Button
      </v-btn>
    </v-card-actions>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Group Member
        </div>
        <v-list-item-title class="text-h5 mb-1">
         정원
        </v-list-item-title>
        <v-list-item-subtitle>3D프린터 재료 조달..</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
     
      ><img src="img/dog.jpg" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/team"
      >
        Button
      </v-btn>
    </v-card-actions>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Group Member
        </div>
        <v-list-item-title class="text-h5 mb-1">
         정우
        </v-list-item-title>
        <v-list-item-subtitle>Cad 설계.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
     
      ><img src="img/chunsik.jpeg" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/team"
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
      </p>
      <p class="text-h4 text--primary">
        1.준비물
        
      </p>
     
      
      <strong><p>3D 프린터 등</p></strong>
      <div class="text--primary">
        <p class="text-h4 text--primary">
        2.아두이노 배선
      </p>
        
        
      </div>
      <p>3D프린터를 사용하여 재료를 제작 C를 이용하여 6족 보행 로봇 제어</p>
      <img src="img/3Dprint.png" alt="projects" width="40%">
    </v-card-text>
    <v-card-actions>
      
    </v-card-actions>
  </v-card>
       
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
    
    
  }
</script>
