import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kl';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;