import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SecurityHub extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SecurityHub.Types.ClientConfiguration)
  config: Config & SecurityHub.Types.ClientConfiguration;
  /**
   * Accepts the invitation to be monitored by a Security Hub master account.
   */
  acceptInvitation(params: SecurityHub.Types.AcceptInvitationRequest, callback?: (err: AWSError, data: SecurityHub.Types.AcceptInvitationResponse) => void): Request<SecurityHub.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Accepts the invitation to be monitored by a Security Hub master account.
   */
  acceptInvitation(callback?: (err: AWSError, data: SecurityHub.Types.AcceptInvitationResponse) => void): Request<SecurityHub.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Disables the standards specified by the standards subscription ARNs. In the context of Security Hub, supported standards (for example, CIS AWS Foundations) are automated and continuous checks that help determine your compliance status against security industry (including AWS) best practices.
   */
  batchDisableStandards(params: SecurityHub.Types.BatchDisableStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchDisableStandardsResponse) => void): Request<SecurityHub.Types.BatchDisableStandardsResponse, AWSError>;
  /**
   * Disables the standards specified by the standards subscription ARNs. In the context of Security Hub, supported standards (for example, CIS AWS Foundations) are automated and continuous checks that help determine your compliance status against security industry (including AWS) best practices.
   */
  batchDisableStandards(callback?: (err: AWSError, data: SecurityHub.Types.BatchDisableStandardsResponse) => void): Request<SecurityHub.Types.BatchDisableStandardsResponse, AWSError>;
  /**
   * Enables the standards specified by the standards ARNs. In the context of Security Hub, supported standards (for example, CIS AWS Foundations) are automated and continuous checks that help determine your compliance status against security industry (including AWS) best practices. 
   */
  batchEnableStandards(params: SecurityHub.Types.BatchEnableStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchEnableStandardsResponse) => void): Request<SecurityHub.Types.BatchEnableStandardsResponse, AWSError>;
  /**
   * Enables the standards specified by the standards ARNs. In the context of Security Hub, supported standards (for example, CIS AWS Foundations) are automated and continuous checks that help determine your compliance status against security industry (including AWS) best practices. 
   */
  batchEnableStandards(callback?: (err: AWSError, data: SecurityHub.Types.BatchEnableStandardsResponse) => void): Request<SecurityHub.Types.BatchEnableStandardsResponse, AWSError>;
  /**
   * Imports security findings generated from an integrated third-party product into Security Hub.
   */
  batchImportFindings(params: SecurityHub.Types.BatchImportFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchImportFindingsResponse) => void): Request<SecurityHub.Types.BatchImportFindingsResponse, AWSError>;
  /**
   * Imports security findings generated from an integrated third-party product into Security Hub.
   */
  batchImportFindings(callback?: (err: AWSError, data: SecurityHub.Types.BatchImportFindingsResponse) => void): Request<SecurityHub.Types.BatchImportFindingsResponse, AWSError>;
  /**
   * Creates an insight, which is a consolidation of findings that identifies a security area that requires attention or intervention.
   */
  createInsight(params: SecurityHub.Types.CreateInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateInsightResponse) => void): Request<SecurityHub.Types.CreateInsightResponse, AWSError>;
  /**
   * Creates an insight, which is a consolidation of findings that identifies a security area that requires attention or intervention.
   */
  createInsight(callback?: (err: AWSError, data: SecurityHub.Types.CreateInsightResponse) => void): Request<SecurityHub.Types.CreateInsightResponse, AWSError>;
  /**
   * Creates Security Hub member accounts associated with the account used for this action, which becomes the Security Hub Master account. Security Hub must be enabled in the account used to make this request.
   */
  createMembers(params: SecurityHub.Types.CreateMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateMembersResponse) => void): Request<SecurityHub.Types.CreateMembersResponse, AWSError>;
  /**
   * Creates Security Hub member accounts associated with the account used for this action, which becomes the Security Hub Master account. Security Hub must be enabled in the account used to make this request.
   */
  createMembers(callback?: (err: AWSError, data: SecurityHub.Types.CreateMembersResponse) => void): Request<SecurityHub.Types.CreateMembersResponse, AWSError>;
  /**
   * Declines invitations that are sent to this AWS account (invitee) from the AWS accounts (inviters) that are specified by the provided AccountIds.
   */
  declineInvitations(params: SecurityHub.Types.DeclineInvitationsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeclineInvitationsResponse) => void): Request<SecurityHub.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Declines invitations that are sent to this AWS account (invitee) from the AWS accounts (inviters) that are specified by the provided AccountIds.
   */
  declineInvitations(callback?: (err: AWSError, data: SecurityHub.Types.DeclineInvitationsResponse) => void): Request<SecurityHub.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Deletes the insight specified by the InsightArn.
   */
  deleteInsight(params: SecurityHub.Types.DeleteInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteInsightResponse) => void): Request<SecurityHub.Types.DeleteInsightResponse, AWSError>;
  /**
   * Deletes the insight specified by the InsightArn.
   */
  deleteInsight(callback?: (err: AWSError, data: SecurityHub.Types.DeleteInsightResponse) => void): Request<SecurityHub.Types.DeleteInsightResponse, AWSError>;
  /**
   * Deletes invitations that were sent to theis AWS account (invitee) by the AWS accounts (inviters) that are specified by their account IDs. 
   */
  deleteInvitations(params: SecurityHub.Types.DeleteInvitationsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteInvitationsResponse) => void): Request<SecurityHub.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes invitations that were sent to theis AWS account (invitee) by the AWS accounts (inviters) that are specified by their account IDs. 
   */
  deleteInvitations(callback?: (err: AWSError, data: SecurityHub.Types.DeleteInvitationsResponse) => void): Request<SecurityHub.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes the Security Hub member accounts that the account IDs specify.
   */
  deleteMembers(params: SecurityHub.Types.DeleteMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteMembersResponse) => void): Request<SecurityHub.Types.DeleteMembersResponse, AWSError>;
  /**
   * Deletes the Security Hub member accounts that the account IDs specify.
   */
  deleteMembers(callback?: (err: AWSError, data: SecurityHub.Types.DeleteMembersResponse) => void): Request<SecurityHub.Types.DeleteMembersResponse, AWSError>;
  /**
   * Returns information about the products available that you can subscribe to.
   */
  describeProducts(params: SecurityHub.Types.DescribeProductsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DescribeProductsResponse) => void): Request<SecurityHub.Types.DescribeProductsResponse, AWSError>;
  /**
   * Returns information about the products available that you can subscribe to.
   */
  describeProducts(callback?: (err: AWSError, data: SecurityHub.Types.DescribeProductsResponse) => void): Request<SecurityHub.Types.DescribeProductsResponse, AWSError>;
  /**
   * Cancels the subscription that allows a findings-generating solution (product) to import its findings into Security Hub.
   */
  disableImportFindingsForProduct(params: SecurityHub.Types.DisableImportFindingsForProductRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.DisableImportFindingsForProductResponse, AWSError>;
  /**
   * Cancels the subscription that allows a findings-generating solution (product) to import its findings into Security Hub.
   */
  disableImportFindingsForProduct(callback?: (err: AWSError, data: SecurityHub.Types.DisableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.DisableImportFindingsForProductResponse, AWSError>;
  /**
   * Disables the Security Hub service.
   */
  disableSecurityHub(params: SecurityHub.Types.DisableSecurityHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisableSecurityHubResponse) => void): Request<SecurityHub.Types.DisableSecurityHubResponse, AWSError>;
  /**
   * Disables the Security Hub service.
   */
  disableSecurityHub(callback?: (err: AWSError, data: SecurityHub.Types.DisableSecurityHubResponse) => void): Request<SecurityHub.Types.DisableSecurityHubResponse, AWSError>;
  /**
   * Disassociates the current Security Hub member account from its master account.
   */
  disassociateFromMasterAccount(params: SecurityHub.Types.DisassociateFromMasterAccountRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisassociateFromMasterAccountResponse) => void): Request<SecurityHub.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates the current Security Hub member account from its master account.
   */
  disassociateFromMasterAccount(callback?: (err: AWSError, data: SecurityHub.Types.DisassociateFromMasterAccountResponse) => void): Request<SecurityHub.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates the Security Hub member accounts that are specified by the account IDs from their master account. 
   */
  disassociateMembers(params: SecurityHub.Types.DisassociateMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisassociateMembersResponse) => void): Request<SecurityHub.Types.DisassociateMembersResponse, AWSError>;
  /**
   * Disassociates the Security Hub member accounts that are specified by the account IDs from their master account. 
   */
  disassociateMembers(callback?: (err: AWSError, data: SecurityHub.Types.DisassociateMembersResponse) => void): Request<SecurityHub.Types.DisassociateMembersResponse, AWSError>;
  /**
   * Sets up the subscription that enables a findings-generating solution (product) to import its findings into Security Hub.
   */
  enableImportFindingsForProduct(params: SecurityHub.Types.EnableImportFindingsForProductRequest, callback?: (err: AWSError, data: SecurityHub.Types.EnableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.EnableImportFindingsForProductResponse, AWSError>;
  /**
   * Sets up the subscription that enables a findings-generating solution (product) to import its findings into Security Hub.
   */
  enableImportFindingsForProduct(callback?: (err: AWSError, data: SecurityHub.Types.EnableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.EnableImportFindingsForProductResponse, AWSError>;
  /**
   * Enables the Security Hub service.
   */
  enableSecurityHub(params: SecurityHub.Types.EnableSecurityHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.EnableSecurityHubResponse) => void): Request<SecurityHub.Types.EnableSecurityHubResponse, AWSError>;
  /**
   * Enables the Security Hub service.
   */
  enableSecurityHub(callback?: (err: AWSError, data: SecurityHub.Types.EnableSecurityHubResponse) => void): Request<SecurityHub.Types.EnableSecurityHubResponse, AWSError>;
  /**
   * Lists and describes enabled standards.
   */
  getEnabledStandards(params: SecurityHub.Types.GetEnabledStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetEnabledStandardsResponse) => void): Request<SecurityHub.Types.GetEnabledStandardsResponse, AWSError>;
  /**
   * Lists and describes enabled standards.
   */
  getEnabledStandards(callback?: (err: AWSError, data: SecurityHub.Types.GetEnabledStandardsResponse) => void): Request<SecurityHub.Types.GetEnabledStandardsResponse, AWSError>;
  /**
   * Lists and describes Security Hub-aggregated findings that filter attributes specify.
   */
  getFindings(params: SecurityHub.Types.GetFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetFindingsResponse) => void): Request<SecurityHub.Types.GetFindingsResponse, AWSError>;
  /**
   * Lists and describes Security Hub-aggregated findings that filter attributes specify.
   */
  getFindings(callback?: (err: AWSError, data: SecurityHub.Types.GetFindingsResponse) => void): Request<SecurityHub.Types.GetFindingsResponse, AWSError>;
  /**
   * Lists the results of the Security Hub insight that the insight ARN specifies.
   */
  getInsightResults(params: SecurityHub.Types.GetInsightResultsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInsightResultsResponse) => void): Request<SecurityHub.Types.GetInsightResultsResponse, AWSError>;
  /**
   * Lists the results of the Security Hub insight that the insight ARN specifies.
   */
  getInsightResults(callback?: (err: AWSError, data: SecurityHub.Types.GetInsightResultsResponse) => void): Request<SecurityHub.Types.GetInsightResultsResponse, AWSError>;
  /**
   * Lists and describes insights that insight ARNs specify.
   */
  getInsights(params: SecurityHub.Types.GetInsightsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInsightsResponse) => void): Request<SecurityHub.Types.GetInsightsResponse, AWSError>;
  /**
   * Lists and describes insights that insight ARNs specify.
   */
  getInsights(callback?: (err: AWSError, data: SecurityHub.Types.GetInsightsResponse) => void): Request<SecurityHub.Types.GetInsightsResponse, AWSError>;
  /**
   * Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. 
   */
  getInvitationsCount(params: SecurityHub.Types.GetInvitationsCountRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInvitationsCountResponse) => void): Request<SecurityHub.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. 
   */
  getInvitationsCount(callback?: (err: AWSError, data: SecurityHub.Types.GetInvitationsCountResponse) => void): Request<SecurityHub.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Provides the details for the Security Hub master account to the current member account. 
   */
  getMasterAccount(params: SecurityHub.Types.GetMasterAccountRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetMasterAccountResponse) => void): Request<SecurityHub.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Provides the details for the Security Hub master account to the current member account. 
   */
  getMasterAccount(callback?: (err: AWSError, data: SecurityHub.Types.GetMasterAccountResponse) => void): Request<SecurityHub.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Returns the details on the Security Hub member accounts that the account IDs specify.
   */
  getMembers(params: SecurityHub.Types.GetMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetMembersResponse) => void): Request<SecurityHub.Types.GetMembersResponse, AWSError>;
  /**
   * Returns the details on the Security Hub member accounts that the account IDs specify.
   */
  getMembers(callback?: (err: AWSError, data: SecurityHub.Types.GetMembersResponse) => void): Request<SecurityHub.Types.GetMembersResponse, AWSError>;
  /**
   * Invites other AWS accounts to enable Security Hub and become Security Hub member accounts. When an account accepts the invitation and becomes a member account, the master account can view Security Hub findings of the member account. 
   */
  inviteMembers(params: SecurityHub.Types.InviteMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.InviteMembersResponse) => void): Request<SecurityHub.Types.InviteMembersResponse, AWSError>;
  /**
   * Invites other AWS accounts to enable Security Hub and become Security Hub member accounts. When an account accepts the invitation and becomes a member account, the master account can view Security Hub findings of the member account. 
   */
  inviteMembers(callback?: (err: AWSError, data: SecurityHub.Types.InviteMembersResponse) => void): Request<SecurityHub.Types.InviteMembersResponse, AWSError>;
  /**
   * Lists all findings-generating solutions (products) whose findings you have subscribed to receive in Security Hub.
   */
  listEnabledProductsForImport(params: SecurityHub.Types.ListEnabledProductsForImportRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListEnabledProductsForImportResponse) => void): Request<SecurityHub.Types.ListEnabledProductsForImportResponse, AWSError>;
  /**
   * Lists all findings-generating solutions (products) whose findings you have subscribed to receive in Security Hub.
   */
  listEnabledProductsForImport(callback?: (err: AWSError, data: SecurityHub.Types.ListEnabledProductsForImportResponse) => void): Request<SecurityHub.Types.ListEnabledProductsForImportResponse, AWSError>;
  /**
   * Lists all Security Hub membership invitations that were sent to the current AWS account. 
   */
  listInvitations(params: SecurityHub.Types.ListInvitationsRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListInvitationsResponse) => void): Request<SecurityHub.Types.ListInvitationsResponse, AWSError>;
  /**
   * Lists all Security Hub membership invitations that were sent to the current AWS account. 
   */
  listInvitations(callback?: (err: AWSError, data: SecurityHub.Types.ListInvitationsResponse) => void): Request<SecurityHub.Types.ListInvitationsResponse, AWSError>;
  /**
   * Lists details about all member accounts for the current Security Hub master account.
   */
  listMembers(params: SecurityHub.Types.ListMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListMembersResponse) => void): Request<SecurityHub.Types.ListMembersResponse, AWSError>;
  /**
   * Lists details about all member accounts for the current Security Hub master account.
   */
  listMembers(callback?: (err: AWSError, data: SecurityHub.Types.ListMembersResponse) => void): Request<SecurityHub.Types.ListMembersResponse, AWSError>;
  /**
   * Returns a list of account IDs that are subscribed to the product.
   */
  listProductSubscribers(params: SecurityHub.Types.ListProductSubscribersRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListProductSubscribersResponse) => void): Request<SecurityHub.Types.ListProductSubscribersResponse, AWSError>;
  /**
   * Returns a list of account IDs that are subscribed to the product.
   */
  listProductSubscribers(callback?: (err: AWSError, data: SecurityHub.Types.ListProductSubscribersResponse) => void): Request<SecurityHub.Types.ListProductSubscribersResponse, AWSError>;
  /**
   * Updates the Note and RecordState of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.
   */
  updateFindings(params: SecurityHub.Types.UpdateFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateFindingsResponse) => void): Request<SecurityHub.Types.UpdateFindingsResponse, AWSError>;
  /**
   * Updates the Note and RecordState of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.
   */
  updateFindings(callback?: (err: AWSError, data: SecurityHub.Types.UpdateFindingsResponse) => void): Request<SecurityHub.Types.UpdateFindingsResponse, AWSError>;
  /**
   * Updates the Security Hub insight that the insight ARN specifies.
   */
  updateInsight(params: SecurityHub.Types.UpdateInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateInsightResponse) => void): Request<SecurityHub.Types.UpdateInsightResponse, AWSError>;
  /**
   * Updates the Security Hub insight that the insight ARN specifies.
   */
  updateInsight(callback?: (err: AWSError, data: SecurityHub.Types.UpdateInsightResponse) => void): Request<SecurityHub.Types.UpdateInsightResponse, AWSError>;
}
declare namespace SecurityHub {
  export interface AcceptInvitationRequest {
    /**
     * The account ID of the Security Hub master account whose invitation you're accepting.
     */
    MasterId?: NonEmptyString;
    /**
     * The ID of the invitation that the Security Hub master account sends to the AWS account.
     */
    InvitationId?: NonEmptyString;
  }
  export interface AcceptInvitationResponse {
  }
  export interface AccountDetails {
    /**
     * The ID of an AWS account.
     */
    AccountId?: AccountId;
    /**
     * The email of an AWS account.
     */
    Email?: NonEmptyString;
  }
  export type AccountDetailsList = AccountDetails[];
  export type AccountId = string;
  export type AccountIdList = NonEmptyString[];
  export type ArnList = NonEmptyString[];
  export interface AwsEc2InstanceDetails {
    /**
     * The instance type of the instance. 
     */
    Type?: NonEmptyString;
    /**
     * The Amazon Machine Image (AMI) ID of the instance.
     */
    ImageId?: NonEmptyString;
    /**
     * The IPv4 addresses associated with the instance.
     */
    IpV4Addresses?: StringList;
    /**
     * The IPv6 addresses associated with the instance.
     */
    IpV6Addresses?: StringList;
    /**
     * The key name associated with the instance.
     */
    KeyName?: NonEmptyString;
    /**
     * The IAM profile ARN of the instance.
     */
    IamInstanceProfileArn?: NonEmptyString;
    /**
     * The identifier of the VPC that the instance was launched in.
     */
    VpcId?: NonEmptyString;
    /**
     * The identifier of the subnet that the instance was launched in.
     */
    SubnetId?: NonEmptyString;
    /**
     * The date/time the instance was launched.
     */
    LaunchedAt?: NonEmptyString;
  }
  export interface AwsIamAccessKeyDetails {
    /**
     * The user associated with the IAM access key related to a finding.
     */
    UserName?: NonEmptyString;
    /**
     * The status of the IAM access key related to a finding.
     */
    Status?: AwsIamAccessKeyStatus;
    /**
     * The creation date/time of the IAM access key related to a finding.
     */
    CreatedAt?: NonEmptyString;
  }
  export type AwsIamAccessKeyStatus = "Active"|"Inactive"|string;
  export interface AwsS3BucketDetails {
    /**
     * The canonical user ID of the owner of the S3 bucket.
     */
    OwnerId?: NonEmptyString;
    /**
     * The display name of the owner of the S3 bucket.
     */
    OwnerName?: NonEmptyString;
  }
  export interface AwsSecurityFinding {
    /**
     * The schema version that a finding is formatted for.
     */
    SchemaVersion: NonEmptyString;
    /**
     * The security findings provider-specific identifier for a finding.
     */
    Id: NonEmptyString;
    /**
     * The ARN generated by Security Hub that uniquely identifies a third-party company (security-findings provider) after this provider's product (solution that generates findings) is registered with Security Hub. 
     */
    ProductArn: NonEmptyString;
    /**
     * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security-findings providers' solutions, this generator can be called a rule, a check, a detector, a plug-in, etc. 
     */
    GeneratorId: NonEmptyString;
    /**
     * The AWS account ID that a finding is generated in.
     */
    AwsAccountId: NonEmptyString;
    /**
     * One or more finding types in the format of namespace/category/classifier that classify a finding. Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications
     */
    Types: TypeList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider first observed the potential security issue that a finding captured.
     */
    FirstObservedAt?: NonEmptyString;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider most recently observed the potential security issue that a finding captured.
     */
    LastObservedAt?: NonEmptyString;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider created the potential security issue that a finding captured.
     */
    CreatedAt: NonEmptyString;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider last updated the finding record. 
     */
    UpdatedAt: NonEmptyString;
    /**
     * A finding's severity.
     */
    Severity: Severity;
    /**
     * A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
     */
    Confidence?: Integer;
    /**
     * The level of importance assigned to the resources associated with the finding. A score of 0 means the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
     */
    Criticality?: Integer;
    /**
     * A finding's title.  In this release, Title is a required property. 
     */
    Title?: NonEmptyString;
    /**
     * A finding's description.  In this release, Description is a required property. 
     */
    Description?: NonEmptyString;
    /**
     * An data type that describes the remediation options for a finding.
     */
    Remediation?: Remediation;
    /**
     * A URL that links to a page about the current finding in the security-findings provider's solution.
     */
    SourceUrl?: NonEmptyString;
    /**
     * A data type where security-findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
     */
    ProductFields?: FieldMap;
    /**
     * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. 
     */
    UserDefinedFields?: FieldMap;
    /**
     * A list of malware related to a finding.
     */
    Malware?: MalwareList;
    /**
     * The details of network-related information about a finding.
     */
    Network?: Network;
    /**
     * The details of process-related information about a finding.
     */
    Process?: ProcessDetails;
    /**
     * Threat intel details related to a finding.
     */
    ThreatIntelIndicators?: ThreatIntelIndicatorList;
    /**
     * A set of resource data types that describe the resources that the finding refers to.
     */
    Resources: ResourceList;
    /**
     * This data type is exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard (for example, CIS AWS Foundations). Contains compliance-related finding details.
     */
    Compliance?: Compliance;
    /**
     * Indicates the veracity of a finding. 
     */
    VerificationState?: VerificationState;
    /**
     * The workflow state of a finding. 
     */
    WorkflowState?: WorkflowState;
    /**
     * The record state of a finding.
     */
    RecordState?: RecordState;
    /**
     * A list of related findings.
     */
    RelatedFindings?: RelatedFindingList;
    /**
     * A user-defined note added to a finding.
     */
    Note?: Note;
  }
  export interface AwsSecurityFindingFilters {
    /**
     * The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
     */
    ProductArn?: StringFilterList;
    /**
     * The AWS account ID that a finding is generated in.
     */
    AwsAccountId?: StringFilterList;
    /**
     * The security findings provider-specific identifier for a finding.
     */
    Id?: StringFilterList;
    /**
     * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security-findings providers' solutions, this generator can be called a rule, a check, a detector, a plug-in, etc.
     */
    GeneratorId?: StringFilterList;
    /**
     * A finding type in the format of namespace/category/classifier that classifies a finding.
     */
    Type?: StringFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider first observed the potential security issue that a finding captured.
     */
    FirstObservedAt?: DateFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider most recently observed the potential security issue that a finding captured.
     */
    LastObservedAt?: DateFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider captured the potential security issue that a finding captured.
     */
    CreatedAt?: DateFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider last updated the finding record. 
     */
    UpdatedAt?: DateFilterList;
    /**
     * The native severity as defined by the security-findings provider's solution that generated the finding.
     */
    SeverityProduct?: NumberFilterList;
    /**
     * The normalized severity of a finding.
     */
    SeverityNormalized?: NumberFilterList;
    /**
     * The label of a finding's severity.
     */
    SeverityLabel?: StringFilterList;
    /**
     * A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
     */
    Confidence?: NumberFilterList;
    /**
     * The level of importance assigned to the resources associated with the finding. A score of 0 means the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
     */
    Criticality?: NumberFilterList;
    /**
     * A finding's title.
     */
    Title?: StringFilterList;
    /**
     * A finding's description.
     */
    Description?: StringFilterList;
    /**
     * The recommendation of what to do about the issue described in a finding.
     */
    RecommendationText?: StringFilterList;
    /**
     * A URL that links to a page about the current finding in the security-findings provider's solution.
     */
    SourceUrl?: StringFilterList;
    /**
     * A data type where security-findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
     */
    ProductFields?: MapFilterList;
    /**
     * The name of the solution (product) that generates findings.
     */
    ProductName?: StringFilterList;
    /**
     * The name of the findings provider (company) that owns the solution (product) that generates findings.
     */
    CompanyName?: StringFilterList;
    /**
     * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. 
     */
    UserDefinedFields?: MapFilterList;
    /**
     * The name of the malware that was observed.
     */
    MalwareName?: StringFilterList;
    /**
     * The type of the malware that was observed.
     */
    MalwareType?: StringFilterList;
    /**
     * The filesystem path of the malware that was observed.
     */
    MalwarePath?: StringFilterList;
    /**
     * The state of the malware that was observed.
     */
    MalwareState?: StringFilterList;
    /**
     * Indicates the direction of network traffic associated with a finding.
     */
    NetworkDirection?: StringFilterList;
    /**
     * The protocol of network-related information about a finding.
     */
    NetworkProtocol?: StringFilterList;
    /**
     * The source IPv4 address of network-related information about a finding.
     */
    NetworkSourceIpV4?: IpFilterList;
    /**
     * The source IPv6 address of network-related information about a finding.
     */
    NetworkSourceIpV6?: IpFilterList;
    /**
     * The source port of network-related information about a finding.
     */
    NetworkSourcePort?: NumberFilterList;
    /**
     * The source domain of network-related information about a finding.
     */
    NetworkSourceDomain?: StringFilterList;
    /**
     * The source media access control (MAC) address of network-related information about a finding.
     */
    NetworkSourceMac?: StringFilterList;
    /**
     * The destination IPv4 address of network-related information about a finding.
     */
    NetworkDestinationIpV4?: IpFilterList;
    /**
     * The destination IPv6 address of network-related information about a finding.
     */
    NetworkDestinationIpV6?: IpFilterList;
    /**
     * The destination port of network-related information about a finding.
     */
    NetworkDestinationPort?: NumberFilterList;
    /**
     * The destination domain of network-related information about a finding.
     */
    NetworkDestinationDomain?: StringFilterList;
    /**
     * The name of the process.
     */
    ProcessName?: StringFilterList;
    /**
     * The path to the process executable.
     */
    ProcessPath?: StringFilterList;
    /**
     * The process ID.
     */
    ProcessPid?: NumberFilterList;
    /**
     * The parent process ID.
     */
    ProcessParentPid?: NumberFilterList;
    /**
     * The date/time that the process was launched.
     */
    ProcessLaunchedAt?: DateFilterList;
    /**
     * The date/time that the process was terminated.
     */
    ProcessTerminatedAt?: DateFilterList;
    /**
     * The type of a threat intel indicator.
     */
    ThreatIntelIndicatorType?: StringFilterList;
    /**
     * The value of a threat intel indicator.
     */
    ThreatIntelIndicatorValue?: StringFilterList;
    /**
     * The category of a threat intel indicator.
     */
    ThreatIntelIndicatorCategory?: StringFilterList;
    /**
     * The date/time of the last observation of a threat intel indicator.
     */
    ThreatIntelIndicatorLastObservedAt?: DateFilterList;
    /**
     * The source of the threat intel.
     */
    ThreatIntelIndicatorSource?: StringFilterList;
    /**
     * The URL for more details from the source of the threat intel.
     */
    ThreatIntelIndicatorSourceUrl?: StringFilterList;
    /**
     * Specifies the type of the resource that details are provided for.
     */
    ResourceType?: StringFilterList;
    /**
     * The canonical identifier for the given resource type.
     */
    ResourceId?: StringFilterList;
    /**
     * The canonical AWS partition name that the Region is assigned to.
     */
    ResourcePartition?: StringFilterList;
    /**
     * The canonical AWS external Region name where this resource is located.
     */
    ResourceRegion?: StringFilterList;
    /**
     * A list of AWS tags associated with a resource at the time the finding was processed.
     */
    ResourceTags?: MapFilterList;
    /**
     * The instance type of the instance.
     */
    ResourceAwsEc2InstanceType?: StringFilterList;
    /**
     * The Amazon Machine Image (AMI) ID of the instance.
     */
    ResourceAwsEc2InstanceImageId?: StringFilterList;
    /**
     * The IPv4 addresses associated with the instance.
     */
    ResourceAwsEc2InstanceIpV4Addresses?: IpFilterList;
    /**
     * The IPv6 addresses associated with the instance.
     */
    ResourceAwsEc2InstanceIpV6Addresses?: IpFilterList;
    /**
     * The key name associated with the instance.
     */
    ResourceAwsEc2InstanceKeyName?: StringFilterList;
    /**
     * The IAM profile ARN of the instance.
     */
    ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilterList;
    /**
     * The identifier of the VPC that the instance was launched in.
     */
    ResourceAwsEc2InstanceVpcId?: StringFilterList;
    /**
     * The identifier of the subnet that the instance was launched in.
     */
    ResourceAwsEc2InstanceSubnetId?: StringFilterList;
    /**
     * The date/time the instance was launched.
     */
    ResourceAwsEc2InstanceLaunchedAt?: DateFilterList;
    /**
     * The canonical user ID of the owner of the S3 bucket.
     */
    ResourceAwsS3BucketOwnerId?: StringFilterList;
    /**
     * The display name of the owner of the S3 bucket.
     */
    ResourceAwsS3BucketOwnerName?: StringFilterList;
    /**
     * The user associated with the IAM access key related to a finding.
     */
    ResourceAwsIamAccessKeyUserName?: StringFilterList;
    /**
     * The status of the IAM access key related to a finding.
     */
    ResourceAwsIamAccessKeyStatus?: StringFilterList;
    /**
     * The creation date/time of the IAM access key related to a finding.
     */
    ResourceAwsIamAccessKeyCreatedAt?: DateFilterList;
    /**
     * The name of the container related to a finding.
     */
    ResourceContainerName?: StringFilterList;
    /**
     * The identifier of the image related to a finding.
     */
    ResourceContainerImageId?: StringFilterList;
    /**
     * The name of the image related to a finding.
     */
    ResourceContainerImageName?: StringFilterList;
    /**
     * The date/time that the container was started.
     */
    ResourceContainerLaunchedAt?: DateFilterList;
    /**
     * The details of a resource that doesn't have a specific subfield for the resource type defined.
     */
    ResourceDetailsOther?: MapFilterList;
    /**
     * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard (for example, CIS AWS Foundations). Contains compliance-related finding details.
     */
    ComplianceStatus?: StringFilterList;
    /**
     * The veracity of a finding. 
     */
    VerificationState?: StringFilterList;
    /**
     * The workflow state of a finding.
     */
    WorkflowState?: StringFilterList;
    /**
     * The updated record state for the finding.
     */
    RecordState?: StringFilterList;
    /**
     * The ARN of the solution that generated a related finding.
     */
    RelatedFindingsProductArn?: StringFilterList;
    /**
     * The solution-generated identifier for a related finding.
     */
    RelatedFindingsId?: StringFilterList;
    /**
     * The text of a note.
     */
    NoteText?: StringFilterList;
    /**
     * The timestamp of when the note was updated.
     */
    NoteUpdatedAt?: DateFilterList;
    /**
     * The principal that created a note.
     */
    NoteUpdatedBy?: StringFilterList;
    /**
     * A keyword for a finding.
     */
    Keyword?: KeywordFilterList;
  }
  export type AwsSecurityFindingList = AwsSecurityFinding[];
  export interface BatchDisableStandardsRequest {
    /**
     * The ARNs of the standards subscriptions that you want to disable.
     */
    StandardsSubscriptionArns: StandardsSubscriptionArns;
  }
  export interface BatchDisableStandardsResponse {
    /**
     * The details of the standards subscriptions that were disabled.
     */
    StandardsSubscriptions?: StandardsSubscriptions;
  }
  export interface BatchEnableStandardsRequest {
    /**
     * The list of standards that you want to enable.  In this release, Security Hub supports only the CIS AWS Foundations standard. Its ARN is arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0. 
     */
    StandardsSubscriptionRequests: StandardsSubscriptionRequests;
  }
  export interface BatchEnableStandardsResponse {
    /**
     * The details of the standards subscriptions that were enabled.
     */
    StandardsSubscriptions?: StandardsSubscriptions;
  }
  export interface BatchImportFindingsRequest {
    /**
     * A list of findings to import. You must submit them in the AwsSecurityFinding format.
     */
    Findings: AwsSecurityFindingList;
  }
  export interface BatchImportFindingsResponse {
    /**
     * The number of findings that failed to import.
     */
    FailedCount: Integer;
    /**
     * The number of findings that were successfully imported
     */
    SuccessCount: Integer;
    /**
     * The list of the findings that failed to import.
     */
    FailedFindings?: ImportFindingsErrorList;
  }
  export type Boolean = boolean;
  export type CategoryList = NonEmptyString[];
  export interface Compliance {
    /**
     * The result of a compliance check.
     */
    Status?: ComplianceStatus;
  }
  export type ComplianceStatus = "PASSED"|"WARNING"|"FAILED"|"NOT_AVAILABLE"|string;
  export interface ContainerDetails {
    /**
     * The name of the container related to a finding.
     */
    Name?: NonEmptyString;
    /**
     * The identifier of the image related to a finding.
     */
    ImageId?: NonEmptyString;
    /**
     * The name of the image related to a finding.
     */
    ImageName?: NonEmptyString;
    /**
     * The date/time that the container was started.
     */
    LaunchedAt?: NonEmptyString;
  }
  export interface CreateInsightRequest {
    /**
     * The user-defined name that identifies the insight to create.
     */
    Name: NonEmptyString;
    /**
     * A collection of attributes that are applied to all of the active findings aggregated by Security Hub, and that result in a subset of findings that are included in this insight.
     */
    Filters: AwsSecurityFindingFilters;
    /**
     * The attribute by which the insight's findings are grouped. This attribute is used as a findings aggregator for the purposes of viewing and managing multiple related findings under a single operand.
     */
    GroupByAttribute: NonEmptyString;
  }
  export interface CreateInsightResponse {
    /**
     * The ARN of the insight created.
     */
    InsightArn: NonEmptyString;
  }
  export interface CreateMembersRequest {
    /**
     * A list of account ID and email address pairs of the accounts to associate with the Security Hub master account.
     */
    AccountDetails?: AccountDetailsList;
  }
  export interface CreateMembersResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DateFilter {
    /**
     * A start date for the date filter.
     */
    Start?: NonEmptyString;
    /**
     * An end date for the date filter.
     */
    End?: NonEmptyString;
    /**
     * A date range for the date filter.
     */
    DateRange?: DateRange;
  }
  export type DateFilterList = DateFilter[];
  export interface DateRange {
    /**
     * A date range value for the date filter.
     */
    Value?: Integer;
    /**
     * A date range unit for the date filter.
     */
    Unit?: DateRangeUnit;
  }
  export type DateRangeUnit = "DAYS"|string;
  export interface DeclineInvitationsRequest {
    /**
     * A list of account IDs that specify the accounts from which invitations to Security Hub are declined.
     */
    AccountIds?: AccountIdList;
  }
  export interface DeclineInvitationsResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed. 
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DeleteInsightRequest {
    /**
     * The ARN of the insight to delete.
     */
    InsightArn: NonEmptyString;
  }
  export interface DeleteInsightResponse {
    /**
     * The ARN of the insight that was deleted.
     */
    InsightArn: NonEmptyString;
  }
  export interface DeleteInvitationsRequest {
    /**
     * A list of account IDs that specify accounts whose invitations to Security Hub you want to delete. 
     */
    AccountIds?: AccountIdList;
  }
  export interface DeleteInvitationsResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed. 
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DeleteMembersRequest {
    /**
     * A list of account IDs of the Security Hub member accounts that you want to delete. 
     */
    AccountIds?: AccountIdList;
  }
  export interface DeleteMembersResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed. 
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DescribeProductsRequest {
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeProductsResponse {
    /**
     * A list of products.
     */
    Products: ProductsList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface DisableImportFindingsForProductRequest {
    /**
     * The ARN of a resource that represents your subscription to a supported product.
     */
    ProductSubscriptionArn: NonEmptyString;
  }
  export interface DisableImportFindingsForProductResponse {
  }
  export interface DisableSecurityHubRequest {
  }
  export interface DisableSecurityHubResponse {
  }
  export interface DisassociateFromMasterAccountRequest {
  }
  export interface DisassociateFromMasterAccountResponse {
  }
  export interface DisassociateMembersRequest {
    /**
     * The account IDs of the member accounts that you want to disassociate from the master account.
     */
    AccountIds?: AccountIdList;
  }
  export interface DisassociateMembersResponse {
  }
  export type Double = number;
  export interface EnableImportFindingsForProductRequest {
    /**
     * The ARN of the product that generates findings that you want to import into Security Hub.
     */
    ProductArn: NonEmptyString;
  }
  export interface EnableImportFindingsForProductResponse {
    /**
     * The ARN of a resource that represents your subscription to the product that generates the findings that you want to import into Security Hub.
     */
    ProductSubscriptionArn?: NonEmptyString;
  }
  export interface EnableSecurityHubRequest {
  }
  export interface EnableSecurityHubResponse {
  }
  export type FieldMap = {[key: string]: NonEmptyString};
  export interface GetEnabledStandardsRequest {
    /**
     * The list of standards subscription ARNS that you want to list and describe.
     */
    StandardsSubscriptionArns?: StandardsSubscriptionArns;
    /**
     * Paginates results. On your first call to the GetEnabledStandards operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items that you want in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface GetEnabledStandardsResponse {
    /**
     * The standards subscription details returned by the operation.
     */
    StandardsSubscriptions?: StandardsSubscriptions;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface GetFindingsRequest {
    /**
     * A collection of attributes that is used for querying findings.
     */
    Filters?: AwsSecurityFindingFilters;
    /**
     * A collection of attributes used for sorting findings.
     */
    SortCriteria?: SortCriteria;
    /**
     * Paginates results. On your first call to the GetFindings operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * Indicates the maximum number of items that you want in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface GetFindingsResponse {
    /**
     * Findings details returned by the operation.
     */
    Findings: AwsSecurityFindingList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface GetInsightResultsRequest {
    /**
     * The ARN of the insight whose results you want to see.
     */
    InsightArn: NonEmptyString;
  }
  export interface GetInsightResultsResponse {
    /**
     * The insight results returned by the operation.
     */
    InsightResults: InsightResults;
  }
  export interface GetInsightsRequest {
    /**
     * The ARNs of the insights that you want to describe.
     */
    InsightArns?: ArnList;
    /**
     * Paginates results. On your first call to the GetInsights operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items that you want in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface GetInsightsResponse {
    /**
     * The insights returned by the operation.
     */
    Insights: InsightList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface GetInvitationsCountRequest {
  }
  export interface GetInvitationsCountResponse {
    /**
     * The number of all membership invitations sent to this Security Hub member account, not including the currently accepted invitation. 
     */
    InvitationsCount?: Integer;
  }
  export interface GetMasterAccountRequest {
  }
  export interface GetMasterAccountResponse {
    /**
     * A list of details about the Security Hub master account for the current member account. 
     */
    Master?: Invitation;
  }
  export interface GetMembersRequest {
    /**
     * A list of account IDs for the Security Hub member accounts that you want to return the details for. 
     */
    AccountIds: AccountIdList;
  }
  export interface GetMembersResponse {
    /**
     * A list of details about the Security Hub member accounts.
     */
    Members?: MemberList;
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface ImportFindingsError {
    /**
     * The ID of the error made during the BatchImportFindings operation.
     */
    Id: NonEmptyString;
    /**
     * The code of the error made during the BatchImportFindings operation. 
     */
    ErrorCode: NonEmptyString;
    /**
     * The message of the error made during the BatchImportFindings operation. 
     */
    ErrorMessage: NonEmptyString;
  }
  export type ImportFindingsErrorList = ImportFindingsError[];
  export interface Insight {
    /**
     * The ARN of a Security Hub insight.
     */
    InsightArn: NonEmptyString;
    /**
     * The name of a Security Hub insight.
     */
    Name: NonEmptyString;
    /**
     * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. 
     */
    Filters: AwsSecurityFindingFilters;
    /**
     * The attribute that the insight's findings are grouped by. This attribute is used as a findings aggregator for the purposes of viewing and managing multiple related findings under a single operand.
     */
    GroupByAttribute: NonEmptyString;
  }
  export type InsightList = Insight[];
  export interface InsightResultValue {
    /**
     * The value of the attribute that the findings are grouped by for the insight whose results are returned by the GetInsightResults operation.
     */
    GroupByAttributeValue: NonEmptyString;
    /**
     * The number of findings returned for each GroupByAttributeValue.
     */
    Count: Integer;
  }
  export type InsightResultValueList = InsightResultValue[];
  export interface InsightResults {
    /**
     * The ARN of the insight whose results are returned by the GetInsightResults operation.
     */
    InsightArn: NonEmptyString;
    /**
     * The attribute that the findings are grouped by for the insight whose results are returned by the GetInsightResults operation.
     */
    GroupByAttribute: NonEmptyString;
    /**
     * The list of insight result values returned by the GetInsightResults operation.
     */
    ResultValues: InsightResultValueList;
  }
  export type Integer = number;
  export interface Invitation {
    /**
     * The account ID of the Security Hub master account that sent the invitation. 
     */
    AccountId?: AccountId;
    /**
     * The ID of the invitation that the Security Hub master account sent.
     */
    InvitationId?: NonEmptyString;
    /**
     * The timestamp of when the invitation was sent.
     */
    InvitedAt?: Timestamp;
    /**
     * The current relationship status between the inviter and invitee accounts.
     */
    MemberStatus?: NonEmptyString;
  }
  export type InvitationList = Invitation[];
  export interface InviteMembersRequest {
    /**
     * A list of IDs of the AWS accounts that you want to invite to Security Hub as members. 
     */
    AccountIds?: AccountIdList;
  }
  export interface InviteMembersResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed. 
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface IpFilter {
    /**
     * A finding's CIDR value.
     */
    Cidr?: NonEmptyString;
  }
  export type IpFilterList = IpFilter[];
  export interface KeywordFilter {
    /**
     * A value for the keyword.
     */
    Value?: NonEmptyString;
  }
  export type KeywordFilterList = KeywordFilter[];
  export interface ListEnabledProductsForImportRequest {
    /**
     * Paginates results. On your first call to the ListEnabledProductsForImport operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items that you want in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListEnabledProductsForImportResponse {
    /**
     * A list of ARNs for the resources that represent your subscriptions to products. 
     */
    ProductSubscriptions?: ProductSubscriptionArnList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface ListInvitationsRequest {
    /**
     * The maximum number of items that you want in the response. 
     */
    MaxResults?: MaxResults;
    /**
     * Paginates results. On your first call to the ListInvitations operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. 
     */
    NextToken?: NextToken;
  }
  export interface ListInvitationsResponse {
    /**
     * The details of the invitations returned by the operation.
     */
    Invitations?: InvitationList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListMembersRequest {
    /**
     * Specifies which member accounts the response includes based on their relationship status with the master account. The default value is TRUE. If onlyAssociated is set to TRUE, the response includes member accounts whose relationship status with the master is set to ENABLED or DISABLED. If onlyAssociated is set to FALSE, the response includes all existing member accounts. 
     */
    OnlyAssociated?: Boolean;
    /**
     * The maximum number of items that you want in the response. 
     */
    MaxResults?: MaxResults;
    /**
     * Paginates results. Set the value of this parameter to NULL on your first call to the ListMembers operation. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data. 
     */
    NextToken?: NextToken;
  }
  export interface ListMembersResponse {
    /**
     * Member details returned by the operation.
     */
    Members?: MemberList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListProductSubscribersRequest {
    /**
     * The ARN of the product.
     */
    ProductArn?: NonEmptyString;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface ListProductSubscribersResponse {
    /**
     * A list of account IDs that are subscribed to the product.
     */
    ProductSubscribers?: ProductSubscribersList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface Malware {
    /**
     * The name of the malware that was observed.
     */
    Name: NonEmptyString;
    /**
     * The type of the malware that was observed.
     */
    Type?: MalwareType;
    /**
     * The file system path of the malware that was observed.
     */
    Path?: NonEmptyString;
    /**
     * The state of the malware that was observed.
     */
    State?: MalwareState;
  }
  export type MalwareList = Malware[];
  export type MalwareState = "OBSERVED"|"REMOVAL_FAILED"|"REMOVED"|string;
  export type MalwareType = "ADWARE"|"BLENDED_THREAT"|"BOTNET_AGENT"|"COIN_MINER"|"EXPLOIT_KIT"|"KEYLOGGER"|"MACRO"|"POTENTIALLY_UNWANTED"|"SPYWARE"|"RANSOMWARE"|"REMOTE_ACCESS"|"ROOTKIT"|"TROJAN"|"VIRUS"|"WORM"|string;
  export interface MapFilter {
    /**
     * The key of the map filter.
     */
    Key?: NonEmptyString;
    /**
     * The value for the key in the map filter.
     */
    Value?: NonEmptyString;
    /**
     * The condition to be applied to a key value when querying for findings with a map filter.
     */
    Comparison?: MapFilterComparison;
  }
  export type MapFilterComparison = "EQUALS"|string;
  export type MapFilterList = MapFilter[];
  export type MaxResults = number;
  export interface Member {
    /**
     * The AWS account ID of a Security Hub member account.
     */
    AccountId?: AccountId;
    /**
     * The email of a Security Hub member account.
     */
    Email?: NonEmptyString;
    /**
     * The AWS account ID of the Security Hub master account to this member account.
     */
    MasterId?: NonEmptyString;
    /**
     * The status of the relationship between the member account and its master account. 
     */
    MemberStatus?: NonEmptyString;
    /**
     * The timestamp of when the member account was invited to Security Hub.
     */
    InvitedAt?: Timestamp;
    /**
     * The timestamp of when this member account was updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type MemberList = Member[];
  export interface Network {
    /**
     * The direction of network traffic associated with a finding.
     */
    Direction?: NetworkDirection;
    /**
     * The protocol of network-related information about a finding.
     */
    Protocol?: NonEmptyString;
    /**
     * The source IPv4 address of network-related information about a finding.
     */
    SourceIpV4?: NonEmptyString;
    /**
     * The source IPv6 address of network-related information about a finding.
     */
    SourceIpV6?: NonEmptyString;
    /**
     * The source port of network-related information about a finding.
     */
    SourcePort?: Integer;
    /**
     * The source domain of network-related information about a finding.
     */
    SourceDomain?: NonEmptyString;
    /**
     * The source media access control (MAC) address of network-related information about a finding.
     */
    SourceMac?: NonEmptyString;
    /**
     * The destination IPv4 address of network-related information about a finding.
     */
    DestinationIpV4?: NonEmptyString;
    /**
     * The destination IPv6 address of network-related information about a finding.
     */
    DestinationIpV6?: NonEmptyString;
    /**
     * The destination port of network-related information about a finding.
     */
    DestinationPort?: Integer;
    /**
     * The destination domain of network-related information about a finding.
     */
    DestinationDomain?: NonEmptyString;
  }
  export type NetworkDirection = "IN"|"OUT"|string;
  export type NextToken = string;
  export type NonEmptyString = string;
  export interface Note {
    /**
     * The text of a note.
     */
    Text: NonEmptyString;
    /**
     * The principal that created a note.
     */
    UpdatedBy: NonEmptyString;
    /**
     * The timestamp of when the note was updated.
     */
    UpdatedAt: NonEmptyString;
  }
  export interface NoteUpdate {
    /**
     * The updated note text.
     */
    Text: NonEmptyString;
    /**
     * The principal that updated the note.
     */
    UpdatedBy: NonEmptyString;
  }
  export interface NumberFilter {
    /**
     * The greater-than-equal condition to be applied to a single field when querying for findings. 
     */
    Gte?: Double;
    /**
     * The less-than-equal condition to be applied to a single field when querying for findings. 
     */
    Lte?: Double;
    /**
     * The equal-to condition to be applied to a single field when querying for findings.
     */
    Eq?: Double;
  }
  export type NumberFilterList = NumberFilter[];
  export type Partition = "aws"|"aws-cn"|"aws-us-gov"|string;
  export interface ProcessDetails {
    /**
     * The name of the process.
     */
    Name?: NonEmptyString;
    /**
     * The path to the process executable.
     */
    Path?: NonEmptyString;
    /**
     * The process ID.
     */
    Pid?: Integer;
    /**
     * The parent process ID.
     */
    ParentPid?: Integer;
    /**
     * The date/time that the process was launched.
     */
    LaunchedAt?: NonEmptyString;
    /**
     * The date/time that the process was terminated.
     */
    TerminatedAt?: NonEmptyString;
  }
  export interface Product {
    /**
     * The ARN assigned to the product.
     */
    ProductArn: NonEmptyString;
    /**
     * The name of the product.
     */
    ProductName?: NonEmptyString;
    /**
     * The name of the company that provides the product.
     */
    CompanyName?: NonEmptyString;
    /**
     * A description of the product.
     */
    Description?: NonEmptyString;
    /**
     * The categories assigned to the product.
     */
    Categories?: CategoryList;
    /**
     * The URL for the page that contains more information about the product.
     */
    MarketplaceUrl?: NonEmptyString;
    /**
     * The URL used to activate the product.
     */
    ActivationUrl?: NonEmptyString;
    /**
     * The resource policy asasociated with the product.
     */
    ProductSubscriptionResourcePolicy?: NonEmptyString;
  }
  export type ProductSubscribersList = NonEmptyString[];
  export type ProductSubscriptionArnList = NonEmptyString[];
  export type ProductsList = Product[];
  export interface Recommendation {
    /**
     * The recommendation of what to do about the issue described in a finding. 
     */
    Text?: NonEmptyString;
    /**
     * A URL to link to general remediation information for the finding type of a finding. 
     */
    Url?: NonEmptyString;
  }
  export type RecordState = "ACTIVE"|"ARCHIVED"|string;
  export interface RelatedFinding {
    /**
     * The ARN of the solution that generated a related finding.
     */
    ProductArn: NonEmptyString;
    /**
     * The solution-generated identifier for a related finding.
     */
    Id: NonEmptyString;
  }
  export type RelatedFindingList = RelatedFinding[];
  export interface Remediation {
    /**
     * A recommendation on how to remediate the issue identified within a finding.
     */
    Recommendation?: Recommendation;
  }
  export interface Resource {
    /**
     * The type of the resource that details are provided for.
     */
    Type: NonEmptyString;
    /**
     * The canonical identifier for the given resource type.
     */
    Id: NonEmptyString;
    /**
     * The canonical AWS partition name that the Region is assigned to.
     */
    Partition?: Partition;
    /**
     * The canonical AWS external Region name where this resource is located.
     */
    Region?: NonEmptyString;
    /**
     * A list of AWS tags associated with a resource at the time the finding was processed.
     */
    Tags?: FieldMap;
    /**
     * Additional details about the resource.
     */
    Details?: ResourceDetails;
  }
  export interface ResourceDetails {
    /**
     * The details of an Amazon EC2 instance.
     */
    AwsEc2Instance?: AwsEc2InstanceDetails;
    /**
     * The details of an Amazon S3 Bucket.
     */
    AwsS3Bucket?: AwsS3BucketDetails;
    /**
     * IAM access key details related to a finding.
     */
    AwsIamAccessKey?: AwsIamAccessKeyDetails;
    /**
     * Container details related to a finding.
     */
    Container?: ContainerDetails;
    /**
     * The details of a resource that doesn't have a specific subfield for the resource type defined.
     */
    Other?: FieldMap;
  }
  export type ResourceList = Resource[];
  export interface Result {
    /**
     * An ID of the AWS account that couldn't be processed. 
     */
    AccountId?: AccountId;
    /**
     * The reason for why an account couldn't be processed.
     */
    ProcessingResult?: NonEmptyString;
  }
  export type ResultList = Result[];
  export interface Severity {
    /**
     * The native severity as defined by the security-findings provider's solution that generated the finding.
     */
    Product?: Double;
    /**
     * The normalized severity of a finding.
     */
    Normalized: Integer;
  }
  export type SortCriteria = SortCriterion[];
  export interface SortCriterion {
    /**
     * The finding attribute used for sorting findings.
     */
    Field?: NonEmptyString;
    /**
     * The order used for sorting findings.
     */
    SortOrder?: SortOrder;
  }
  export type SortOrder = "asc"|"desc"|string;
  export type StandardsInputParameterMap = {[key: string]: NonEmptyString};
  export type StandardsStatus = "PENDING"|"READY"|"FAILED"|"DELETING"|"INCOMPLETE"|string;
  export interface StandardsSubscription {
    /**
     * The ARN of a resource that represents your subscription to a supported standard.
     */
    StandardsSubscriptionArn: NonEmptyString;
    /**
     * The ARN of a standard.  In this release, Security Hub supports only the CIS AWS Foundations standard.  Its ARN is arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0. 
     */
    StandardsArn: NonEmptyString;
    /**
     * 
     */
    StandardsInput: StandardsInputParameterMap;
    /**
     * The standard's status.
     */
    StandardsStatus: StandardsStatus;
  }
  export type StandardsSubscriptionArns = NonEmptyString[];
  export interface StandardsSubscriptionRequest {
    /**
     * The ARN of the standard that you want to enable.  In this release, Security Hub only supports the CIS AWS Foundations standard.  Its ARN is arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0. 
     */
    StandardsArn: NonEmptyString;
    /**
     * 
     */
    StandardsInput?: StandardsInputParameterMap;
  }
  export type StandardsSubscriptionRequests = StandardsSubscriptionRequest[];
  export type StandardsSubscriptions = StandardsSubscription[];
  export interface StringFilter {
    /**
     * The string filter value.
     */
    Value?: NonEmptyString;
    /**
     * The condition to be applied to a string value when querying for findings. 
     */
    Comparison?: StringFilterComparison;
  }
  export type StringFilterComparison = "EQUALS"|"PREFIX"|string;
  export type StringFilterList = StringFilter[];
  export type StringList = NonEmptyString[];
  export interface ThreatIntelIndicator {
    /**
     * The type of a threat intel indicator.
     */
    Type?: ThreatIntelIndicatorType;
    /**
     * The value of a threat intel indicator.
     */
    Value?: NonEmptyString;
    /**
     * The category of a threat intel indicator.
     */
    Category?: ThreatIntelIndicatorCategory;
    /**
     * The date/time of the last observation of a threat intel indicator.
     */
    LastObservedAt?: NonEmptyString;
    /**
     * The source of the threat intel.
     */
    Source?: NonEmptyString;
    /**
     * The URL for more details from the source of the threat intel.
     */
    SourceUrl?: NonEmptyString;
  }
  export type ThreatIntelIndicatorCategory = "BACKDOOR"|"CARD_STEALER"|"COMMAND_AND_CONTROL"|"DROP_SITE"|"EXPLOIT_SITE"|"KEYLOGGER"|string;
  export type ThreatIntelIndicatorList = ThreatIntelIndicator[];
  export type ThreatIntelIndicatorType = "DOMAIN"|"EMAIL_ADDRESS"|"HASH_MD5"|"HASH_SHA1"|"HASH_SHA256"|"HASH_SHA512"|"IPV4_ADDRESS"|"IPV6_ADDRESS"|"MUTEX"|"PROCESS"|"URL"|string;
  export type Timestamp = Date;
  export type TypeList = NonEmptyString[];
  export interface UpdateFindingsRequest {
    /**
     * A collection of attributes that specify which findings you want to update.
     */
    Filters: AwsSecurityFindingFilters;
    /**
     * The updated note for the finding.
     */
    Note?: NoteUpdate;
    /**
     * The updated record state for the finding.
     */
    RecordState?: RecordState;
  }
  export interface UpdateFindingsResponse {
  }
  export interface UpdateInsightRequest {
    /**
     * The ARN of the insight that you want to update.
     */
    InsightArn: NonEmptyString;
    /**
     * The updated name for the insight.
     */
    Name?: NonEmptyString;
    /**
     * The updated filters that define this insight.
     */
    Filters?: AwsSecurityFindingFilters;
    /**
     * The updated GroupBy attribute that defines this insight.
     */
    GroupByAttribute?: NonEmptyString;
  }
  export interface UpdateInsightResponse {
  }
  export type VerificationState = "UNKNOWN"|"TRUE_POSITIVE"|"FALSE_POSITIVE"|"BENIGN_POSITIVE"|string;
  export type WorkflowState = "NEW"|"ASSIGNED"|"IN_PROGRESS"|"DEFERRED"|"RESOLVED"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-10-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SecurityHub client.
   */
  export import Types = SecurityHub;
}
export = SecurityHub;
