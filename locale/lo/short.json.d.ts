import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lo';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;