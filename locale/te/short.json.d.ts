import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'te';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;