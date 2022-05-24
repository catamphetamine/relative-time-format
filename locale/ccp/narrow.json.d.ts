import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ccp';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;