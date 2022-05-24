import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mk';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;