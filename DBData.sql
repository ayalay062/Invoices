USE [Invoice]
GO
SET IDENTITY_INSERT [dbo].[InvoiceStatus] ON 
GO
INSERT [dbo].[InvoiceStatus] ([Id], [Name]) VALUES (1, N'Done')
GO
INSERT [dbo].[InvoiceStatus] ([Id], [Name]) VALUES (2, N'New')
GO
INSERT [dbo].[InvoiceStatus] ([Id], [Name]) VALUES (3, N'Cancel')
GO
SET IDENTITY_INSERT [dbo].[InvoiceStatus] OFF
GO
SET IDENTITY_INSERT [dbo].[Invoices] ON 
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (1, N'Guy', CAST(1010.00000 AS Decimal(18, 5)), CAST(N'2023-03-02T00:00:00.0000000' AS DateTime2), 2, CAST(N'2023-03-02T12:33:53.8011294' AS DateTime2))
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (2, N'Moshe', CAST(1120.00000 AS Decimal(18, 5)), CAST(N'2023-03-02T00:00:00.0000000' AS DateTime2), 2, CAST(N'2023-03-02T12:52:54.0899481' AS DateTime2))
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (3, N'Ron', CAST(3289.00000 AS Decimal(18, 5)), CAST(N'2023-03-01T00:00:00.0000000' AS DateTime2), 2, NULL)
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (4, N'David', CAST(2194.00000 AS Decimal(18, 5)), CAST(N'2023-03-01T00:00:00.0000000' AS DateTime2), 3, NULL)
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (5, N'Gal', CAST(7893.00000 AS Decimal(18, 5)), CAST(N'2023-02-22T00:00:00.0000000' AS DateTime2), 2, NULL)
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (6, N'Mor', CAST(9389.00000 AS Decimal(18, 5)), CAST(N'2023-01-31T00:00:00.0000000' AS DateTime2), 1, NULL)
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (7, N'Gol', CAST(8944.00000 AS Decimal(18, 5)), CAST(N'2023-01-22T00:00:00.0000000' AS DateTime2), 2, NULL)
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (9, N'New', CAST(11212.00000 AS Decimal(18, 5)), CAST(N'2023-03-02T00:00:00.0000000' AS DateTime2), 2, NULL)
GO
INSERT [dbo].[Invoices] ([Id], [CustomerName], [Amount], [CreatedDate], [StatusId], [UpdatedDate]) VALUES (10, N'New', CAST(1121.00000 AS Decimal(18, 5)), CAST(N'2023-03-02T00:00:00.0000000' AS DateTime2), 2, NULL)
GO

SET IDENTITY_INSERT [dbo].[Invoices] OFF
GO
