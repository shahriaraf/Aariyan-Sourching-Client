export const GET = async (req) => {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/shop",
    "/shop/[id]",
    "/blog",
    "/blog/[id]",
    "/myaccount",
    "/order",
    "/faq",
    "/sizechartpage",
    "/service",
    "/profile",
    "/workprocess",
    "/certificates",
    "/Sustainability",
    "/FabricShowcase",
    "/Sizechart",
    "/resource",
    "/lookbook",
    "/colors",
    "/printingembroidery",
    "/compliance",
    "/Cookie",
    "/codeofconduct",
    "/Privecy",
  ];

  const llmsContent = routes.join("\n");

  return new Response(llmsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
