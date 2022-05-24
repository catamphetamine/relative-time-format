import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ccp';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;