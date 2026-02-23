import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'scn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;