import {
  ArrowNarrowRightIcon,
  LightningBoltIcon,
  ShoppingBagIcon,
} from "@heroicons/react/solid";
import {
  Bold,
  Button,
  Card,
  Flex,
  Grid,
  Icon,
  List,
  ListItem,
  Text,
  Title,
} from "@tremor/react";
import AuthenticatedLayout from "../Layouts/Menu";
function Categories() {
  return (
    <>
      <AuthenticatedLayout
        header={
          <h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">
            Lista de Categorias
          </h2>
        }
      >
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <div className="pt-14">
                  <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
                    <Card>
                      <Title>Lacteos</Title>
                      <Text>Leche</Text>
                      <List className="mt-4">
                        <ListItem key={null}>
                          <Flex
                            justifyContent="start"
                            className="truncate space-x-4"
                          >
                            <Icon
                              variant="light"
                              icon={ShoppingBagIcon}
                              size="md"
                              color="sky"
                            />
                            <div className="truncate">
                              <Text className="truncate">
                                <Bold>Gloria</Bold>
                              </Text>
                              <Text className="truncate">24 Productos</Text>
                            </div>
                          </Flex>
                          <Text>$ 230</Text>
                        </ListItem>
                      </List>
                      <List className="mt-4">
                        <ListItem key={null}>
                          <Flex
                            justifyContent="start"
                            className="truncate space-x-4"
                          >
                            <Icon
                              variant="light"
                              icon={LightningBoltIcon}
                              size="md"
                              color="yellow"
                            />
                            <div className="truncate">
                              <Text className="truncate">
                                <Bold>Gloria</Bold>
                              </Text>
                              <Text className="truncate">24 Productos</Text>
                            </div>
                          </Flex>
                          <Text>$ 230</Text>
                        </ListItem>
                      </List>
                      <Button
                        size="sm"
                        variant="light"
                        icon={ArrowNarrowRightIcon}
                        iconPosition="right"
                        className="mt-4"
                      >
                        View details
                      </Button>
                    </Card>

                    <Card>
                      <Title>Carnes</Title>
                      <Text>Carnes y pollos</Text>
                      <List className="mt-4">
                        <ListItem key={null}>
                          <Flex
                            justifyContent="start"
                            className="truncate space-x-4"
                          >
                            <Icon
                              variant="light"
                              icon={ShoppingBagIcon}
                              size="md"
                              color="sky"
                            />
                            <div className="truncate">
                              <Text className="truncate">
                                <Bold>Gloria</Bold>
                              </Text>
                              <Text className="truncate">24 Productos</Text>
                            </div>
                          </Flex>
                          <Text>$ 230</Text>
                        </ListItem>
                      </List>

                      <List className="mt-4">
                        <ListItem key={null}>
                          <Flex
                            justifyContent="start"
                            className="truncate space-x-4"
                          >
                            <Icon
                              variant="light"
                              icon={LightningBoltIcon}
                              size="md"
                              color="yellow"
                            />
                            <div className="truncate">
                              <Text className="truncate">
                                <Bold>Gloria</Bold>
                              </Text>
                              <Text className="truncate">24 Productos</Text>
                            </div>
                          </Flex>
                          <Text>$ 230</Text>
                        </ListItem>
                      </List>
                      <Button
                        size="sm"
                        variant="light"
                        icon={ArrowNarrowRightIcon}
                        iconPosition="right"
                        className="mt-4"
                      >
                        View details
                      </Button>
                    </Card>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}

export default Categories;
