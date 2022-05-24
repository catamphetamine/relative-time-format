import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nb';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;