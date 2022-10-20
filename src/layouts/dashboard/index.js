/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import crypto1 from "assets/images/crypto-1.jpeg";
import crypto2 from "assets/images/crypto-2.jpeg";
import crypto3 from "assets/images/crypto-3.jpeg";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";


function Dashboard() {
  const { gradients } = colors;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={12}>
              <WelcomeMark />
            </Grid>           
          </Grid>
        </VuiBox>
        
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} lg={12} xl={12}>
          <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={12}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="xl" fontWeight="bold" mb="6px">
                  Frequently Asked Questions
                </VuiTypography>
                <VuiTypography color="text" variant="sm" fontWeight="regular">
                  Jangan takut, Bolafy disini untuk membantu 😁
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={crypto1}
                    label=""
                    title="Apa itu Dompet Bolafy?"
                    description="Dompet Bolafy adalah tempat khusus untuk menyimpan Koleksi anda, untuk di pamerkan atau di perjual belikan"
                    action={{
                      type: "external",
                      route: `https://medium.com/@notification_90225/apa-itu-dompet-bolafy-cc009b518fa`,
                      color: "white",
                      label: "Lihat Selengkapnya",
                    }}
                
                  />

                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={crypto2}
                    label=""
                    title="Apa fungsi Dompet Bolafy?"
                    description="Dengan Dompet Bolafy, kamu bisa memamerkan koleksi mu di mana saja lho, termasuk situs NFT terkenal Opensea!

                    "
                    action={{
                      type: "external",
                      route: "https://medium.com/@notification_90225/apa-itu-dompet-bolafy-cc009b518fa",
                      color: "white",
                      label: "Lihat Selengkapnya",
                    }}
                    
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={crypto3}
                    label=""
                    title="Gimana cara membuat Dompet Bolafy?"
                    description="Gampang kok! Log in dengan akun Bolafy anda dan klik 'Klaim Dompet Bolafy Saya' di atas halaman ini"
                    action={{
                      type: "external",
                      route: "https://medium.com/@notification_90225/apa-itu-dompet-bolafy-cc009b518fa",
                      color: "white",
                      label: "Lihat Selengkapnya",
                    }}
                    
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>
            </Grid>
        </Grid>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Dashboard;
