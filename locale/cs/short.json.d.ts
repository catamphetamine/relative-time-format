import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cs';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;