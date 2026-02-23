import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'scn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;