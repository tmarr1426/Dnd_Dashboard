const router = require("express").Router();

const prisma = require("../db");

router.get("/stats/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);

  try {
    // Fetch user's stats using Prisma query
    const userStats = await prisma.user.findUnique({
      where: { id: userId },
      select: { stats: true },
    });

    if (!userStats) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(userStats.stats); // Send the user's stats as JSON response
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
