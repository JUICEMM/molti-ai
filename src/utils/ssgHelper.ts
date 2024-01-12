import { createServerSideHelpers } from '@trpc/react-query/server';
import superjson from 'superjson';
import { appRouter } from '@/server/api/root';
import { prisma } from '@/server/db';

const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: {prisma},
  transformer: superjson, // optional - adds superjson serialization
});
